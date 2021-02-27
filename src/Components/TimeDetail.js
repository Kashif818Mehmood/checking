import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
const TimeDetail = () => {
  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 50, marginTop: 20, alignSelf: "center" }}>
          3:01 PM
        </Text>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          September 30, 2020
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/calendar.png")}
        />

        <View>
          <Text style={{ fontSize: 20, alignSelf: "center", marginLeft: 10 }}>
            September 30, 2020
          </Text>
          <Text style={{ fontSize: 20, alignSelf: "center", marginRight: 20 }}>
            Happy Birthday!
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default TimeDetail;
