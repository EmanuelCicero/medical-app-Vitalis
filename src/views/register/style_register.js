import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  texto_cadastro: {
    fontSize: 28,
    margin: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  name_input_container: {
    flexDirection: "row",
    gap: 10,
    maxWidth: 370,
  },
  name_input: {
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
    width:180, 

  },
  text_name: {
    fontSize: 16
  },
  inputs: {
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
  },
  text_input: {
    fontSize: 16,
  },
  texto_login: {
    textAlign: "center",
    fontSize: 16
  },
  login_text_container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  login_text_hyperlink: {
    textDecorationLine: "underline",
    color: "rgb(29,72,99)",
    fontSize: 16
  },
  containerInputs:{
    marginHorizontal: "auto",
    maxWidth: 370, 
    width: "100%",
    gap: 5, 
    marginVertical: 20
    },
});
