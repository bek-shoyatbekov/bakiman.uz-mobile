import { Pressable, Text, View } from "react-native";
import * as React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "./types";
import checkUserAuthorization from "api/local-storage/check-user-authorization";

export default function Navbar() {
  const navigation = useNavigation<StackNavigationProp<NavigationParamList>>();

  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getUser = async () => {
      const userData = await checkUserAuthorization();
      if (userData) {
        setIsLogin(true);
      }
    };
    getUser();
  }, [isLogin]);

  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.navText}>Home</Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Games");
        }}
      >
        <Text style={styles.navText}>Games</Text>
      </Pressable>

      {isLogin ? (
        <Pressable
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.navText}>Login</Text>
        </Pressable>
      )}
    </View>
  );
}
