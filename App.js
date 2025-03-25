import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import images from "./images";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Autocuidado que faz você brilhar</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={images.capa} style={styles.image} />
        <Text style={styles.navbarText}>Contato</Text>
        <Image style={styles.tinyLogo} source={require("./img/logo_principal.svg")} />
        <Text style={styles.navbarTextRight}>Administração</Text>
      </View>
      <View style={styles.content}>
        <Text>Colocar uma breve descrição sobre a representação dos icones aqui, ou um slogan</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  header: {
    backgroundColor: "#A7D6ED",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  headerText: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Poppins_100Thin",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "30%",
  },
  image: {
    width: "100%",
    height: "70%",
  },
  navbarText: {
    position: "absolute",
    left: 30,
    color: "white",
    fontSize: 10,
    marginTop: 10,
    fontFamily: "Poppins",
  },
  tinyLogo: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 100,
    height: 20,
    marginTop: 10,
  
  },
  navbarTextRight: {
    position: "absolute",
    right: 30,
    color: "white",
    fontSize: 10,
    marginTop: 10,
    fontFamily: "Poppins_100Thin",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});