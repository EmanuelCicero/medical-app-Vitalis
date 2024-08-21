import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style_register";

export function telaCadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto_cadastro}>Cadastre-se</Text>

        <View style={styles.name_input_container}>
          <View>
            <Text style={styles.text_name}>Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              style={styles.name_input}
            />
          </View>
          <View>
            <Text style={styles.text_name}>Sobrenome</Text>
            <TextInput
              placeholder="Digite seu sobrenome"
              style={styles.name_input}
            />
          </View>
        </View>
        <Text style={styles.texto_caixa}>E-mail</Text>
        <TextInput placeholder="Digite seu e-mail" style={styles.inputs} />
        <Text style={styles.texto_caixa}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.inputs} />
        <View style={styles.caixa_botao}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={styles.texto_botao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.login_text_container}>
          <Text style={styles.texto_login}>Você já tem uma conta? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.login_text_hyperlink}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
