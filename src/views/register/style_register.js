import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  texto_cadastro: {
    fontSize: 28,
    margin: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  name_input_container: {
    flexDirection: "row",
  },
  name_input: {
    height: 46,
    width: 165,
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
    margin: 10,
  },
  text_name: {
    marginLeft: 10,
  },
  inputs: {
    height: 46,
    width: 350,
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
    marginBottom: 20,
  },
  text_input: {
    margin: 5,
  },
  texto_login: {
    textAlign: "center",
  },
  login_text_container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  login_text_hyperlink: {
    textDecorationLine: "underline",
    color: "rgb(29,72,99)",
  },
});
