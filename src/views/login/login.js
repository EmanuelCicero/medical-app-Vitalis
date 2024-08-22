import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style_login";

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

