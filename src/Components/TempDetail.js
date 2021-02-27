import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
const TempDetail = () => {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginVertical: 20,
            alignSelf: "center",
          }}
          source={require("../../assets/line.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 50 }}>30C</Text>
        <View style={{ marginLeft: 10 }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text>30</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text>30</Text>
          </View>
        </View>
        <View style={{ marginTop: 14 }}>
          <Image
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
            source={require("../../assets/recycle.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require("../../assets/pin.png")}
          resizeMode="contain"
        />
        <Text style={{ marginTop: 10, fontSize: 20, marginLeft: 10 }}>
          Lahore, Pakistan
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default TempDetail;
