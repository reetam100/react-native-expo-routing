import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import Header from "../../components/Header";

const test = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
      headerShown: true,
    });
  }, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
