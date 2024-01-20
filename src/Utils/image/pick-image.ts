import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

const pickImage = async () => {
  try {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return null;
    }
    return result.assets![0].uri;
  } catch (error) {
    console.log("Error picking image", error);
  }
};

export default pickImage;
