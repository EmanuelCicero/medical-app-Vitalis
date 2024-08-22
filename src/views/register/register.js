import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../../components/button";
import { styles } from "./style_register";

export function telaCadastro({ navigation }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const changeVisibility = () => {
    setIsVisible(prevState => !prevState);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto_cadastro}>Cadastre-se</Text>

      <View style={styles.name_input_container}>
        <View>
          <Text style={styles.text_name}>Nome</Text>
          <TextInput
            placeholder="Seu nome"
            style={styles.name_input}
          />
        </View>
        <View>
          <Text style={styles.text_name}>Sobrenome</Text>
          <TextInput
            placeholder="Seu sobrenome"
            style={styles.name_input}
          />
        </View>
      </View>

      <View>
        <Text style={styles.text_input}>E-mail</Text>
        <TextInput 
          placeholder="Digite seu e-mail" 
          style={styles.inputs} 
          right={<TextInput.Icon icon="account"/>}
          />

        <Text style={styles.text_input}>Senha</Text>
        <TextInput 
          placeholder="Digite sua senha" 
          style={styles.inputs} 
          secureTextEntry={isVisible} 
          right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"} onPress={changeVisibility}/>}
          />
      </View>
      <Button
          title={"Avançar"}
          onPress={() => {
            navigation.navigate('Preencha seu Perfil');
          }}
        />

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
  );
}
