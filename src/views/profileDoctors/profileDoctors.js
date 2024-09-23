import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
import CardDoctors from "../../components/cardDoctors/cardDoctors.js";
import { Card, Appbar } from "react-native-paper";
import Button from "../../components/button/button.js";
import { styles } from "./styleProfileDoctors.js";

export function ProfileDoctors({ route, navigation }) {
  const { doctor } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Doctors")} />
        <Appbar.Content title="Detalhes do Médico" />
      </Appbar.Header>
      <View style={styles.containerContent}>
        <View>
          <CardDoctors
            source={doctor.source}
            title={doctor.title}
            specialty={doctor.specialty}
            clinic={doctor.clinic}
            disabled={true}
          ></CardDoctors>
        </View>
        <View>
          <Card style={styles.pushCard}>
            <Text style={styles.styleTitle}>Sobre mim</Text>
            <Text style={styles.styleText}>{doctor.description}</Text>
          </Card>
        </View>
        <View>
          <Card style={styles.pushCard}>
            <Text style={styles.styleTitle}>Horário de atendimento</Text>
            <Text style={[styles.styleText, { width: 250 }]}>{doctor.time}</Text>
          </Card>
        </View>
        <View>
          <Button testId={"agendarConsulta"} title={"Agendar Consulta"} onPress={() => navigation.navigate("Scheduling", { doctor })} />
        </View>
      </View>
    </SafeAreaView>
  )

}
