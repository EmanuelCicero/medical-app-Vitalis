import * as React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

const Buttom = ({ title , onPress }) => (
  <TouchableOpacity 
    style={styles.buttom} 
    onPress={onPress}
    >
    <Text style={styles.textButtom}> {title} </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: "#4D9B91",
    paddingVertical: 10,
    width: "100%",
    maxWidth: 350,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  textButtom: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
export default Buttom;
