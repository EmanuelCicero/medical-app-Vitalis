import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const specialtyFilter = ({ isSelected, onPress, title }) => {
  const backgroundColor = isSelected ? "#4D9B91" : "#E4E4E4";
  const color = isSelected ? "#fff" : "#000"

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.styleText, { color }]}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 99,
  },
  styleText: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },
});


export default specialtyFilter