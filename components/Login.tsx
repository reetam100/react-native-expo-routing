import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // height: hp("100%"),
        backgroundColor: "#F2F2F2",
      }}
    >
      <KeyboardAwareScrollView
        style={{
          flex: 1,
        }}
      >
        {/* <FlatList data={} /> */}
        <View
          style={{
            // backgroundColor: "red",
            paddingHorizontal: 50,
            display: "flex",
            flexDirection: "column",
            gap: 50,
          }}
        >
          <TextInput
            label="Email"
            style={{
              backgroundColor: "#F2F2F2",
            }}
            value={email}
            onChangeText={(x) => setEmail(x)}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            style={{
              backgroundColor: "#F2F2F2",
            }}
            value={password}
            onChangeText={(x) => setPassword(x)}
          />
          <Pressable>
            <Text
              style={{
                color: "#FF4B3A",
                fontWeight: "500",
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={{
            backgroundColor: "#FA4A0C",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 20,
            marginTop: hp("10%"),
            width: wp("60%"),
            alignItems: "center",
            alignSelf: "center",
          }}
          onPress={() => {
            router.push("(drawer)/home");
          }}
        >
          <Text
            style={{
              color: "#F6F6F9",
            }}
          >
            Login
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
