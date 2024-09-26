import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Header from "../../components/Header";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{}}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          headerShown: false,
          // header: () => <Header />,
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="test"
        options={{
          drawerLabel: "Test",
          title: "Tesst",
          headerShown: false,
        }}
      ></Drawer.Screen>
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
