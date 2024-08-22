import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      justifyContent: "center",
    },
    texto_login: {
      fontSize: 28,
      fontWeight: "bold",
      alignSelf: "center",
    },
    inputs: {
      height: 46,
      width: 350,
      backgroundColor: "rgb(228, 241, 238)",
      borderRadius: 5,
      margin: 20,
    },
    texto_caixa: {
      marginLeft: 20,
    },
    signup_container: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 15,
    },
    signup_text: {
      textDecorationLine: "underline",
      color: "rgb(29,72,99)",
    },
    forgot_password: {
      marginTop: 15,
      textAlign: "center",
      textDecorationLine: "underline",
      color: "rgb(29,72,99)",
    },
  });
  