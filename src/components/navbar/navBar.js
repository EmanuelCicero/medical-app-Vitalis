import * as React from "react";
import { View,StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";

const NavBar = ({ navigation, route }) => {
  const changeColorIcon = (screen) => {
    return route.name === screen ? "#4D9B91" : "black";
  };

  return (  
    <View>
      <Card style={styles.containerNavBar}>
        <View style={styles.navBar}>
          <TouchableOpacity testID="screenMain" onPress={() => navigation.navigate("Main")}>
            <MaterialCommunityIcons
              name="home"
              size={40}
              color={changeColorIcon("Main")}
              accessibilityLabel="home-icon"
            />
          </TouchableOpacity>
          <TouchableOpacity testID="screenDoctors" onPress={() => navigation.navigate("Doctors")}>
            <MaterialCommunityIcons
              name="calendar-check"
              size={40}
              color={changeColorIcon("Doctors")}
            />
          </TouchableOpacity>
          <TouchableOpacity testID="screenProfile" onPress={() => navigation.navigate("Perfil")}>
            <MaterialCommunityIcons
              name="account"
              size={40}
              color={changeColorIcon("Perfil")}
            />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  containerNavBar: {
    height: 60,
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center"
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
  },
});

export default NavBar;
