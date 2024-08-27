import * as React from "react";
import { View,StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";

const NavBar = () => {
  const [colorIcon, setColorIcon] = React.useState("home");

  const changeColorIcon = (nameIcon) => {
    setColorIcon(nameIcon);
  };

  return (
    <View>
      <Card style={styles.containerNavBar}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => changeColorIcon("home") }>
            <MaterialCommunityIcons
              name="home"
              size={40}
              color={colorIcon === "home" ? "#4D9B91" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>changeColorIcon("calendar-check")}>
            <MaterialCommunityIcons
              name="calendar-check"
              size={40}
              color={colorIcon === "calendar-check" ? "#4D9B91" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColorIcon("account-supervisor")}>
            <MaterialCommunityIcons
              name="account"
              size={40}
              color={colorIcon === "account-supervisor" ? "#4D9B91" : "black"}
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
    borderWidth: 0.5,
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
