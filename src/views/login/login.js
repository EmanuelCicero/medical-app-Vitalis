import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../../components/button";
import { styles } from "./style_login";

export function telaLogin({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const verifyUserEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail) {
      setEmailError('O campo de e-mail está vazio.');
      return false;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailError('E-mail inválido. Por favor, insira um e-mail válido.');
      return false;
    }
    setEmailError("");
    return true;
  };
  const verifyUserPassword = (userPassword) => {
    if (!userPassword || userPassword.length < 4) setPasswordError("Senha não pode ser vazia ou muito curta!");
    setPasswordError("");
    return true;
  };
  const handleValidate = async () => {
    const isValid1 = verifyUserEmail(email);
    const isValid2 = verifyUserPassword(password);
    if (isValid1 && isValid2) {
      try {
        const response = await fetch('http://10.0.2.2:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocorreu um erro inesperado ao realizar o login.');
        }
        alert('Login realizado com sucesso!');
        console.log('Login realizado com sucesso!');
        navigation.navigate("Main");
      } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Não foi possível realizar o login. Verifique seus dados e tente novamente.');
      }
    }
  };

  const changeVisibility = () => {
    setIsVisible(prevState => !prevState);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto_login}>Entrar</Text>
      <Text style={styles.texto_caixa}>E-mail</Text>
      <TextInput placeholder="Digite seu e-mail"
        onChangeText={text => setEmail(text)} value={email}
        style={styles.inputs}
        right={<TextInput.Icon icon="account" />} />
      <View>
        { emailError? <Text style={{ color: 'red' }}>{emailError}</Text> : null }
      </View>
    <Text style={styles.texto_caixa}>Senha</Text>
    <TextInput placeholder="Digite sua senha"
      onChangeText={text => setPassword(text)} value={password}
      style={styles.inputs}
      secureTextEntry={isVisible}
      right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"}
        onPress={changeVisibility} />} />
      <View>
        { passwordError? <Text style={{ color: 'red' }}>{passwordError}</Text> : null }
      </View>

    <Button
      title={"Entrar"}
      onPress={handleValidate}
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

