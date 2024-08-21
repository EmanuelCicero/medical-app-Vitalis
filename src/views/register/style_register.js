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
    width: 170,
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  text_name: {
    margin: 10,
  },
  caixa_botao: {
    width: 320,
    height: 100,
    marginTop: 56,
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
    fontSize: 18,
    textAlign: "center",
  },
  inputs: {
    height: 46,
    width: 350,
    backgroundColor: "rgb(228, 241, 238)",
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  texto_caixa: {
    margin: 10,
  },
  texto_login: {
    textAlign: "center",
  },
  login_text_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  login_text_hyperlink: {
    textDecorationLine: "underline",
    color: "rgb(29,72,99)",
  },
});
