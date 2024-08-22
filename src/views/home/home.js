import * as React from "react";
import { View, Text, Image, TouchableOpacity,  ScrollView } from "react-native";
import Button from "../../components/button";
import { styles } from "./style_home";

export function telaHome({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.texto_cabecalho}>Vitallis</Text>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.image_logo}
          />
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.texto_boas_vindas}>Bem-vindo!</Text>
          <Text style={styles.texto_boas_vindas}>
            Sua jornada para o bem estar começa aqui!
          </Text>
          <Image
            source={require("../../assets/vitalis_illustration.png")}
            style={styles.image_conteudo}
          />

          <Button
            title={"Entrar"}
            onPress={() => {
              navigation.navigate("Login");
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
        </View>
      </View>
  );
}

