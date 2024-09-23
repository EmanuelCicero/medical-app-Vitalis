import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDeleteAppointment } from "../../api/utils/useDeleteAppointments";
import { useNavigation } from '@react-navigation/native';
import doctorsData from "../../data/doctorsData";

const AppointmentCard = ({ dateAppointment, timeAppointment, source, title, specialty, clinic, appointmentId, updateAppointments}) => {
  const { deleteAppointment } = useDeleteAppointment();
  const navigation = useNavigation();

  const handleDelete = () => {
    if (appointmentId) {
      deleteAppointment(appointmentId, updateAppointments);
    }
  };

  

  const handleReschedule = (id) => {
    if (appointmentId) {
      const doctor = doctorsData.find((doc) => doc.title === title);
      navigation.navigate('Scheduling', { appointmentId: id, doctor});
    }
    
  };


  return (
    <View>
      <TouchableOpacity style={styles.pushCard} activeOpacity={0.85}>
        <Card style={styles.card}>
          <View style={styles.containerCard}>
            <View style={styles.containerDate}>
              <Text style={styles.styleDate}>{dateAppointment + ' - ' + timeAppointment}</Text>
            </View>

            <View style={styles.cardContent}>
              <View>
                <Image source={source}></Image>
              </View>
              <View style={{ gap: 10, width: 180 }}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSpecialty}>{specialty}</Text>
                <Text style={styles.textClinic}>
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={15}
                    color="black"
                  />
                  {clinic}
                </Text>
              </View>
            </View>

            <View style={styles.containerButtons}>
              <View>
                <TouchableOpacity testID={"buttonRemarcar"} onPress={() => handleReschedule(appointmentId)} style={styles.buttonReschedule}>
                  <Text style={styles.textReschedule}> Remarcar </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={handleDelete}
                style={styles.buttonCancel}
                testID={"buttonCancelar"} 
              >
                <Text style={styles.textCancel}> Cancelar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pushCard: {
    marginHorizontal: 30,
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 20,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2F2F2F",
  },
  textSpecialty: {
    color: "#4B5563",
    fontSize: 16,
  },
  textClinic: {
    color: "#4B5563",
  },
  containerCard: {
    flexDirection: "column",
    gap: 20
  },
  containerDate: {
    padding: 10,
  },
  styleDate: {
    fontSize: 16
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20

  },
  buttonReschedule: {
    borderWidth: 2,
    borderColor: "#0E3C58",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonCancel: {
    backgroundColor: "#4D9B91",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  textCancel: {
    color: "#fff",
    fontSize: 16
  },
  textReschedule: {
    fontSize: 16
  }
});

export default AppointmentCard;
