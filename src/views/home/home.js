import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function telaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image_logo}
        />
        <Text style={styles.texto_cabecalho}>Vitallis</Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.texto_boas_vindas}>Bem-vindo!</Text>
        <Text style={styles.texto_boas_vindas}>
          Sua jornada para o bem estar começa aqui!
        </Text>
        <Image
          source={require("../../assets/vitalis_illustration.png")}
          style={styles.image_conteudo}
        />
        <View style={styles.caixa_botao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.texto_botao}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signup_container}>
          <Text style={styles.texto_cadastro}>Não tem uma conta? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cadastro");
            }}
          >
            <Text style={styles.signup_text}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },

  image_logo: {
    width: 63,
    height: 50,
    resizeMode: "contain",
  },
  row: {
    margin: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  texto_cabecalho: {
    fontWeight: "bold",
    fontSize: 25,
    color: "rgb(77, 155, 145)",
  },
  conteudo: {
    margin: "15%",
    flex: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  texto_boas_vindas: {
    fontSize: 25,
    textAlign: "center",
  },
  image_conteudo: {
    width: 320,
    height: 275,
  },
  caixa_botao: {
    width: 320,
    height: 100,
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
  signup_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signup_text: {
    textDecorationLine: "underline",
    color: "rgb(29,72,99)",
  },
});
