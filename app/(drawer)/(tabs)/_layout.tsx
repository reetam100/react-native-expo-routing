import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Header from "../../../components/Header";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{
          // headerShown: false,
          header: () => <Header />,
        }}
      />
      <Tabs.Screen name="favourites" options={{}} />
      <Tabs.Screen name="profile" options={{}} />
      <Tabs.Screen name="orderHistory" options={{}} />
    </Tabs>
  );
}
