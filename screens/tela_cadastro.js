import * as React from 'react'; 
import {Input, Button} from '@rneui/themed';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function telaCadastro(){
  return (
    <View style={styles.container}>
      <Text style={styles.texto_cadastro}>Cadastre-se</Text>
       <Text style={styles.texto_caixa}>Nome completo:</Text>
      <Input placeholder='Digite seu nome' style={styles.inputs}/>
      <Text style={styles.texto_caixa}>E-mail:</Text>
      <Input placeholder='Digite seu e-mail' style={styles.inputs}/>
      <Text style={styles.texto_caixa}>Senha:</Text>
      <Input placeholder='Digite sua senha' style={styles.inputs}/>
      <View style={styles.caixa_botao}>
          <TouchableOpacity style={styles.botao} onPress={() => {
            
          }}>
            <Text style={styles.texto_botao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      <Text style={styles.texto_login}>Você já tem uma conta? Login</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  texto_cadastro: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center'
  },  
  caixa_botao: {
    width: 320,
    height: 100,
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
    backgroundColor: 'rgb(228, 241, 238)',
    borderRadius: 5,
  },  
  texto_caixa:{
    margin: 10,
  },
  texto_login: {
    textAlign: 'center',
  },
});