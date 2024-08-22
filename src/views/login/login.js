import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../../components/button";
import { styles } from "./style_login";

export function telaLogin({ navigation }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const changeVisibility = () => {
    setIsVisible(prevState => !prevState);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto_login}>Entrar</Text>
      <Text style={styles.texto_caixa}>E-mail</Text>
      <TextInput placeholder="Digite seu e-mail" style={styles.inputs} right={<TextInput.Icon icon="account"/>} />
      <Text style={styles.texto_caixa}>Senha</Text>
      <TextInput placeholder="Digite sua senha" style={styles.inputs} secureTextEntry={isVisible} right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"} onPress={changeVisibility}/>}/>
      <Button
            title={"Entrar"}
            onPress={() => {
              
            }}
          />
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

