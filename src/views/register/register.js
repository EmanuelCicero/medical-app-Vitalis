import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../../components/button";
import { styles } from "./style_register";

export function telaCadastro({ navigation }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const changeVisibility = () => {
    setIsVisible(prevState => !prevState);
  }
  const verifyUserName = (nome, sobrenome) => {
    var error = "";
    var padrao = /[^a-zà-ú]/gi;
  
    var valida_nome = nome.match(padrao);
    var valida_sobrenome = sobrenome.match(padrao);
    if( valida_nome || !nome ){
      error = "Nome inválido!"; 
    }
  
    if( valida_sobrenome || !sobrenome ){
      error = "Sobrenome inválido!";
    }

    setNameError(error);
    return error;
  
  };
  
  const verifyUserEmail = (userEmail) =>{
    var error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!userEmail) {
      error = 'O campo de e-mail está vazio.';
    }

    if (!emailRegex.test(userEmail)) {
      error = 'E-mail inválido. Por favor, insira um e-mail válido.';
    }
    setEmailError(error);
    return error;
  };
  
  const verifyUserPassword = (userPassword) =>{
    var error = "";
    if (userPassword == null || userPassword.length < 4) error = ("Senha não pode ser vazia ou muito curta!");
    setPasswordError(error);
    return error;
  };

  const handleValidate = () =>{
    const isValid1 = verifyUserName(firstName, lastName);
    const isValid2 = verifyUserEmail(email);
    const isValid3 = verifyUserPassword(password);
    if (isValid1 == "" && isValid2 == "" && isValid3 == "")
    {
      navigation.navigate("Preencha seu Perfil", {firstName, lastName, email, password});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto_cadastro}>Cadastre-se</Text>

      <View style={styles.name_input_container}>
        <View>
          <Text style={styles.text_name}>Nome</Text>
          <TextInput
            placeholder="Seu nome"
            onChangeText={text => setFirstName(text)} value={firstName}
            style={styles.name_input}
          />
        </View>
        <View>
          <Text style={styles.text_name}>Sobrenome</Text>
          <TextInput
            placeholder="Seu sobrenome"
            onChangeText={text => setLastName(text)} value={lastName}
            style={styles.name_input}
          />
        </View>
        </View>
          {nameError? <Text style={{ color: 'red' }}>{nameError}</Text> : null}
        <View>
      </View>

      <View>
        <Text style={styles.text_input}>E-mail</Text>
        <TextInput 
          placeholder="Digite seu e-mail" 
          onChangeText={text => setEmail(text)} value={email}
          style={styles.inputs} 
          right={<TextInput.Icon icon="account"/>}
        />
        </View>
          {emailError? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
        <View>

        <Text style={styles.text_input}>Senha</Text>
        <TextInput 
          placeholder="Digite sua senha" 
          onChangeText={text => setPassword(text)} value={password}
          style={styles.inputs} 
          secureTextEntry={isVisible} 
          right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"} onPress={changeVisibility}/>}
          />
       </View>
          {passwordError? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
        <View>  
      </View>
      <Button
          title={"Avançar"}
          onPress={handleValidate}
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
