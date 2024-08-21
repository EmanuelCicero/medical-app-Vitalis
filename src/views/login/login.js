import * as React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function telaLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto_login}>Entrar</Text>
      <Text style={styles.texto_caixa}>E-mail</Text>
      <TextInput placeholder="Digite seu e-mail" style={styles.inputs} />
      <Text style={styles.texto_caixa}>Senha</Text>
      <TextInput placeholder="Digite sua senha" style={styles.inputs} />
      <View style={styles.caixa_botao}>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
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
      <TouchableOpacity>
        <Text style={styles.forgot_password}>Esqueci minha senha!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
