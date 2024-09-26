import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <SafeAreaView
      style={{
        height: 100,
      }}
    >
      <View
        style={{
          //   height: 100,
          paddingTop: 50,
          paddingHorizontal: 30,

          //   marginTop: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Image
            source={require("../assets/drawerIcon.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/shopping-cart.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
