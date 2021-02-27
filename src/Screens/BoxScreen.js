import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TempDetail from "../Components/TempDetail";
import TimeDetail from "../Components/TimeDetail";

const BoxScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "powderblue",
          marginVertical: 10,
          borderRadius: 5,
        }}
      >
        <TimeDetail />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "skyblue",
          marginVertical: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <TempDetail />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "steelblue",
          marginVertical: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 40, alignSelf: "center" }}>
          30 C
          <Image
            style={{
              width: 20,
              height: 20,
              marginBottom: 40,
            }}
            source={require("../../assets/recycle.png")}
          />
        </Text>

        <Image
          style={{ width: 60, height: 60, marginTop: 20, alignSelf: "center" }}
          source={require("../../assets/pin.png")}
        />
        <Text style={{ fontSize: 20, marginVertical: 20, alignSelf: "center" }}>
          Lahore, Pakistan
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default BoxScreen;
