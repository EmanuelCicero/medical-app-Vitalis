import * as React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

const Button = ({ title , onPress, disabled , style, testId}) => (
  <TouchableOpacity 
    style={[styles.button, style]} 
    onPress={onPress}
    disabled={disabled}
    testID={testId}
    
    >
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4D9B91",
    paddingVertical: 10,
    width: "100%",
    maxWidth: 370,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
export default Button;
