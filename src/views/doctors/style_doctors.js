import { StyleSheet,   Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 20,
      backgroundColor: "#fff",
      justifyContent:"space-around"
    },
    headerOptions: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 25 
    },
    textOptions:{
      fontSize:18,
      textAlign:"center"
    },
    boxOptions:{
      width: 160,
      gap: 5
    },
    optionLineStyle:{
      borderBottomWidth: 4,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    styleScrollFilter:{
      gap: 10,
      flexDirection: "row",
      justifyContent: "center",
      marginHorizontal: 10,
    }, 
    optionsScreenSize:{
      width: screenWidth,
      flex: 1,
    }
  });