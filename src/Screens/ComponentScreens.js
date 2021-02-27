import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Kashif";
  return (
    <View>
      <Text style={styles.textStyle}>Hello Friends</Text>
      <Text style={styles.bandstyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  bandstyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
