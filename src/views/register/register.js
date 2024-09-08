import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import { useFormValidation } from '../../api/utils/validation';
import Button from "../../components/button";
import ViewError from "../../components/viewError";
import { styles } from "./style_register";

export function telaCadastro({navigation}) {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const { values, errors, handleChange, validateInitialRegisterFields } = useFormValidation(initialValues, navigation);
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
            value={values.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
            style={styles.name_input}
          />
        </View>
        <View>
          <Text style={styles.text_name}>Sobrenome</Text>
          <TextInput
            placeholder="Seu sobrenome"
            value={values.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
            style={styles.name_input}
          />
        </View>
        <ViewError e={errors.firstName}/>
        <ViewError e={errors.lastName}/>
      </View>

      <View>
        <Text style={styles.text_input}>E-mail</Text>
        <TextInput 
          placeholder="Digite seu e-mail" 
          onChangeText={(text) => handleChange('email', text)} value={values.email}
          style={styles.inputs} 
          right={<TextInput.Icon icon="account"/>}
        />
        <ViewError e={errors.email}/>

        <Text style={styles.text_input}>Senha</Text>
        <TextInput 
          placeholder="Digite sua senha" 
          onChangeText={(text) => handleChange('password', text)} value={values.password}
          style={styles.inputs} 
          secureTextEntry={isVisible} 
          right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"} onPress={changeVisibility}/>}
          />
       <ViewError e={errors.password}/>
      </View>
      <Button
          title={"Avançar"}
          onPress={() => validateInitialRegisterFields("Preencha seu Perfil", {...values})}
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
