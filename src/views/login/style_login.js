import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
    },
    texto_login: {
      fontSize: 28,
      fontWeight: "bold",
      alignSelf: "center",
    },
    inputs: {
      backgroundColor: "rgb(228, 241, 238)",
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
    containerInputs:{
      marginHorizontal: "auto",
      maxWidth: 370, 
      width: "100%",
      gap: 5
    },
    textLabel:{
      fontSize: 16
    }
  });
  