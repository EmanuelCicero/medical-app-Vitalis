import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  image_logo: {
    width: 63,
    height: 50,
    resizeMode: "contain",
  },
  row: {
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  texto_cabecalho: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#4D9B91",
  },
  conteudo: {
    backgroundColor: "#fff",
    padding: 20,
    backgroundColor: "",
    alignItems: "center",
    gap: 40,
  },
  texto_boas_vindas: {
    fontSize: 25,
    textAlign: "center",
  },
  image_conteudo: {
    width: 320,
    height: 275,
  },
  texto_botao: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  signup_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signup_text: {
    textDecorationLine: "underline",
    color: "#0E3C58",
  },
});
