import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  usePathname,
} from "expo-router";

const Home2 = () => {
  const pathname = usePathname();
  console.log(pathname);
  const local = useLocalSearchParams();
  const global = useGlobalSearchParams();
  console.log(local);
  console.log(global.params);

  return (
    <View
      style={{
        paddingVertical: 50,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          width: 170,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
          }}
        >
          Delicious food for you
        </Text>
      </View>
      <View
        style={{
          paddingTop: 20,
        }}
      >
        <TextInput
          style={{
            backgroundColor: "green",
          }}
        />
      </View>
      <View>
        <Pressable
          style={{
            backgroundColor: "#FA4A0C",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 20,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            Go Back
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({});
