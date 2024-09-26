import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FF4B3A",
        flex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 50,
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/Ellipse 1.png")}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              top: 10,
              left: 15,
            }}
          >
            <Image
              source={require("../assets/Group 3.png")}
              resizeMode="contain"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "900",
            }}
          >
            Food for
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "900",
            }}
          >
            Everyone
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            transform: [{ translateX: 180 }, { translateY: 70 }],
          }}
        >
          <Image
            source={require("../assets/ToyFaces_Tansparent_BG_29.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            transform: [{ translateX: -250 }, { translateY: -30 }],
          }}
        >
          <Image
            source={require("../assets/ToyFaces_Tansparent_BG_49.png")}
            resizeMode="contain"
            style={{
              width: 250,
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 620,
        }}
      >
        <Image source={require("../assets/Rectangle 3.png")} />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 620,
          marginLeft: 200,
        }}
      >
        <Image source={require("../assets/Rectangle 5.png")} />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 660,
          alignSelf: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#FFFF",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 28,
          }}
          onPress={() => {
            router.push("auth");
          }}
        >
          <Text
            style={{
              color: "#FF460A",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
