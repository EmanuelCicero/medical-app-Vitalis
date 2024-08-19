import * as React from 'react'; 
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function telaCadastro({navigation}){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto_cadastro}>Cadastre-se</Text>

        <View style={styles.name_input_container}>
          <View>
            <Text style={styles.text_name}>Nome</Text>
            <TextInput placeholder='Digite seu nome' style={styles.name_input}/>
          </View>
          <View>
            <Text style={styles.text_name}>Sobrenome</Text>
            <TextInput placeholder='Digite seu sobrenome' style={styles.name_input}/>
          </View>
        </View>
        <Text style={styles.texto_caixa}>E-mail</Text>
        <TextInput placeholder='Digite seu e-mail' style={styles.inputs}/>
        <Text style={styles.texto_caixa}>Senha</Text>
        <TextInput placeholder='Digite sua senha' style={styles.inputs}/>
        <View style={styles.caixa_botao}>
            <TouchableOpacity style={styles.botao} onPress={() => {
              
            }}>
              <Text style={styles.texto_botao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.login_text_container}>
          <Text style={styles.texto_login}>Você já tem uma conta? </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Login');
          }}>
            <Text style={styles.login_text_hyperlink}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto_cadastro: {
    fontSize: 28,
    margin: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },  
  name_input_container: {
    flexDirection: 'row',
  },
  name_input: {
    height: 46,
    width: 170,
    backgroundColor: 'rgb(228, 241, 238)',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  text_name: {
    margin: 10,
  },
  caixa_botao: {
    width: 320,
    height: 100,
    marginTop: 56,
    alignSelf: 'center',
  },
  botao: {
    backgroundColor: 'rgb(77, 155, 145)',   
    paddingVertical: 10,       
    paddingHorizontal: 20,     
    borderRadius: 15,            
  },
  texto_botao: {
    color: 'white',             
    fontSize: 18,               
    textAlign: 'center',        
  },
  inputs: {
    height: 46,
    width: 350,
    backgroundColor: 'rgb(228, 241, 238)',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },   
  texto_caixa:{
    margin: 10,
  },
  texto_login: {
    textAlign: 'center',
  },
  login_text_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login_text_hyperlink: {
    textDecorationLine: 'underline',
    color: 'rgb(29,72,99)',
  },
});