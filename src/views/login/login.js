import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import ViewError from "../../components/viewError";
import { useFormValidation } from '../../api/utils/validation';
import Button from "../../components/button";
import { styles } from "./style_login";

export function telaLogin({ navigation }) {
  const initialValues = {
    email: '',
    password: '',
  };
  const { values, errors, handleChange, validateLoginFields} = useFormValidation(initialValues, navigation);
  const [isVisible, setIsVisible] = React.useState(false);
  const changeVisibility = () => {
    setIsVisible(prevState => !prevState);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto_login}>Entrar</Text>
      <Text style={styles.texto_caixa}>E-mail</Text>
      <TextInput placeholder="Digite seu e-mail"
        onChangeText={text => handleChange('email', text)} value={values.email}
        style={styles.inputs}
        right={<TextInput.Icon icon="account" />} />
      <ViewError e={errors.email}/>
      <Text style={styles.texto_caixa}>Senha</Text>
      <TextInput placeholder="Digite sua senha"
        onChangeText={text => handleChange('password', text)} value={values.password}
        style={styles.inputs}
        secureTextEntry={isVisible}
        right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"}
          onPress={changeVisibility} />} />
      <ViewError e={errors.password}/>

      <Button
        title={"Entrar"}
        onPress={()=> validateLoginFields({...values})}
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

