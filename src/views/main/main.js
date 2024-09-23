import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-paper";
import NavBar from "../../components/navbar/navBar";
import { styles } from "./styleMain";

const imagesCarousel = [
  { uri: "https://i.postimg.cc/W1YVWcqw/Banner.jpg" },
  { uri: "https://i.postimg.cc/y8P8qpkn/Banner.png" },
  { uri: "https://i.postimg.cc/Y9q1RMpT/Banner-1.png" },
];

export function Main({ navigation, route }) {
  const handleFlashScrollIndicators = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.flashScrollIndicators();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background_main.png")}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.containerContent}>
            <View style={styles.headerMain}>
              <View>
                <Image source={require("../../assets/logo.png")}></Image>
              </View>

              <View>
                <MaterialCommunityIcons
                  name="bell-badge"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View>
              <ScrollView
                horizontal
                scrollEventThrottle={16}
                pagingEnabled
                onPress={handleFlashScrollIndicators}
              >
                {imagesCarousel.map((imagesCarousel, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      source={{ uri: imagesCarousel.uri }}
                      style={styles.imageCarousel}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>

            <Card style={styles.limitCard}>
              <Card.Content style={styles.cardServices}>
                <View style={styles.headerService}>
                  <View>
                    <Text style={styles.titleCard}> Serviços </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Doctors")}
                    >
                      <Text style={{ fontSize: 14 }}>
                        Ver tudo
                        <MaterialCommunityIcons
                          name="chevron-double-right"
                          size={14}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.containerSpecialtiesButton}>
                  {/* Button 1 */}
                  <View style={styles.boxSpecialtiesButton}>
                    <View>
                      <TouchableOpacity style={styles.specialtiesButton} onPress={() => navigation.navigate("Doctors")}>
                        <MaterialCommunityIcons
                          name="heart-pulse"
                          size={40}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.styleTextService}> Cardiologista </Text>
                  </View>

                  {/* Button 2*/}
                  <View style={styles.boxSpecialtiesButton}>
                    <View>
                      <TouchableOpacity style={styles.specialtiesButton} onPress={() => navigation.navigate("Doctors")}>
                        <MaterialCommunityIcons
                          name="brain"
                          size={40}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.styleTextService}> Psicologia </Text>
                  </View>

                  {/* Button 3*/}
                  <View style={styles.boxSpecialtiesButton}>
                    <View>
                      <TouchableOpacity style={styles.specialtiesButton} onPress={() => navigation.navigate("Doctors")}>
                        <MaterialCommunityIcons
                          name="plus"
                          size={45}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.styleTextService}> Clínico Geral </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card style={styles.limitCard}>
              <Card.Content>
                <View style={styles.officeContent}>
                  <Text style={styles.titleCard}>Consultórios</Text>
                  <ScrollView
                    horizontal
                    scrollEventThrottle={16}
                    style={{ gap: 10 }}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Card>
                      <View style={styles.spaceContent}>
                        <Image
                          source={require("../../assets/offices/office1.png")}
                        ></Image>
                        <Text> Clínica Saúde e Bem-Estar</Text>
                        <Text>
                          <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={18}
                            color="black"
                          />
                          Rua das Flores, 123, Centro
                        </Text>
                      </View>
                    </Card>

                    <Card style={{ marginLeft: 20 }}>
                      <View style={styles.spaceContent}>
                        <Image
                          source={require("../../assets/offices/office2.jpg")}
                          style={styles.styleImageOffice}
                        ></Image>
                        <Text> Clínica Saúde e Bem-Estar</Text>
                        <Text>
                          <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={18}
                            color="black"
                          />
                          Rua das Flores, 123, Centro
                        </Text>
                      </View>
                    </Card>

                    <Card style={{ marginLeft: 20 }}>
                      <View style={styles.spaceContent}>
                        <Image
                          source={require("../../assets/offices/office3.jpg")}
                          style={styles.styleImageOffice}
                        ></Image>
                        <Text> Clínica Saúde e Bem-Estar</Text>
                        <Text>
                          <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={18}
                            color="black"
                          />
                          Rua das Flores, 123, Centro
                        </Text>
                      </View>
                    </Card>
                  </ScrollView>
                </View>
              </Card.Content>
            </Card>
          </View>
          <NavBar navigation={navigation} route={route} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
