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
    caixa_botao: {
      marginTop: 35,
      width: 350,
      height: 100,
      alignSelf: "center",
    },
    botao: {
      backgroundColor: "rgb(77, 155, 145)",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
    },
    texto_botao: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
    },
    inputs: {
      height: 46,
      width: 350,
      backgroundColor: "rgb(228, 241, 238)",
      borderRadius: 5,
      padding: 5,
      margin: 20,
    },
    texto_caixa: {
      marginLeft: 20,
    },
    signup_container: {
      flexDirection: "row",
      justifyContent: "center",
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
  