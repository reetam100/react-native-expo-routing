import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "../components/Login";
import Register from "../components/Register";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = createMaterialTopTabNavigator();

const AuthScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            height: hp("30%"),
            backgroundColor: "#FFFF",
            // borderBottomEndRadius: 8,
          }}
        >
          <View
            style={{
              marginTop: -200,
              marginLeft: 100,
            }}
          >
            <Image
              source={require("../assets/AuthLogo.png")}
              resizeMode="contain"
              style={{
                width: 150,
              }}
            />
          </View>
        </View>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22,
              backgroundColor: "#FFFF",
            },
            tabBarIndicatorStyle: {
              backgroundColor: "#FA4A0C",
              width: wp("30%"),
              marginLeft: wp("10%"),
            },
          }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Sign-up" component={Register} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
