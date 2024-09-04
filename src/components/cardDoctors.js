import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CardDoctors = ({source, title, specialty, clinic, onPress, disabled}) => {
  return (
    <View>
      <TouchableOpacity style={styles.pushCard} onPress={onPress} activeOpacity={0.85} disabled={disabled}>
        <Card style={styles.card}>
            <View style={styles.cardContent}>
              <View>
                <Image source={source}></Image>
              </View>
              <View style={{gap:10, width:180}}>
                  <Text style={styles.textTitle}>{title}</Text>
                  <Text style={styles.textSpecialty}>{specialty}</Text>
                  <Text style={styles.textClinic}> 
                    <MaterialCommunityIcons name="map-marker-outline" size={15} color="black" />
                    {clinic}
                  </Text>
              </View>
            </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pushCard:{
    marginHorizontal: 30,
  },
  card:{
    backgroundColor:"#fff",
    marginTop: 20
  },
  cardContent:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingVertical: 15,
    alignItems:"center"
  },
  textTitle:{
    fontSize: 18,
    fontWeight:"500",
    color:"#2F2F2F",
  },
  textSpecialty: {
    color:"#4B5563",
    fontSize: 16
  },
  textClinic:{
    color: "#4B5563"
  }

});

export default CardDoctors