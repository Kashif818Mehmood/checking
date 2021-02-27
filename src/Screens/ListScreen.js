import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends # 1", age: "20" },
    { name: "Friends # 2", age: "21" },
    { name: "Friends # 3", age: "22" },
    { name: "Friends # 4", age: "23" },
  ];
  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}-Age{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
    fontSize: 30,
  },
  bandstyle: {
    fontSize: 20,
  },
});

export default ListScreen;
