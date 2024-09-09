import { StyleSheet , Dimensions} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerContent:{
      flex: 1, 
      justifyContent: "space-evenly" 
    },
    imageBackground: {
      flex: 1,
    },
    headerMain: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: "center",
    },
    imageContainer: {
      width: screenWidth,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    imageCarousel: {
      width: "100%",
      height: 200,
      resizeMode: "contain",
    },
    limitCard: {
      marginHorizontal: 20,
      borderRadius: 20,
    },
    cardServices: {
      backgroundColor: "#fff",
      display: "flex",
      gap: 25,
    },
    headerService: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    containerSpecialtiesButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    boxSpecialtiesButton: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    specialtiesButton: {
      width: 70,
      height: 70,
      backgroundColor: "#4D9B91",
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    officeContent: {
      gap: 25,
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    spaceContent:{
      gap: 5,
    },
    styleTextService:{
      fontSize: 16
    },
    titleCard:{
      fontSize: 22
    },
    styleImageOffice:{
      width: 245,
      height: 123, 
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10
    }
  });