import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AppointmentCard = ({ source, title, specialty, clinic }) => {
  return (
    <View>
      <TouchableOpacity style={styles.pushCard}>
        <Card style={styles.card}>
          <View style={styles.containerCard}>
            <View style={styles.containerDate}>
              <Text style={styles.styleDate}>19/04/2024 - 14:00 PM</Text>
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
                  <TouchableOpacity style={styles.buttonReschedule}>
                    <Text style={styles.textReschedule}> Remarcar </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.buttonCancel}>
                  <Text style={styles.textCancel}> Cancelar </Text>
                  </TouchableOpacity>
                </View>
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
  containerDate:{
    padding:10,
  },
  styleDate:{
    fontSize:16
  }, 
  containerButtons:{
    flexDirection:"row",
    justifyContent: "space-evenly",
    marginBottom:20

  },
  buttonReschedule:{
    borderWidth: 2,
    borderColor: "#0E3C58",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10
  }, 
  buttonCancel:{
    backgroundColor:"#4D9B91",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  textCancel:{
    color:"#fff",
    fontSize: 16
  },
  textReschedule:{
    fontSize: 16
  }
});

export default AppointmentCard;
