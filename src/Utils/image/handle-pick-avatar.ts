import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

const handlePickAvatar = async () => {
  try {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.canceled) {
      return null;
    }

    console.log("Picked image result assets", result.assets);
    return result.assets[0]?.uri;
  } catch (error) {
    console.log("Error picking image", error);
    return null;
  }
};

export default handlePickAvatar;
