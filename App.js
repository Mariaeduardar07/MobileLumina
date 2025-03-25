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
      <View style={styles.textIntroduction}>
        <Text>Colocar uma breve descrição sobre a representação dos icones aqui, ou um slogan</Text>
      </View>

      <View style={styles.containerIntroduction}>
        <View>
          <Image style={styles.imgIntroduction} source={require("./img/alvo.png")} />
          <Text style={styles.text}>Capacitar as mulheres a se encontrarem através do autocuidado.</Text>
        </View>
        <View>
          <Image style={styles.imgIntroduction} source={require("./img/diamente.png")} />
          <Text style={styles.text}>Capacitar as mulheres a se encontrarem através do autocuidado.</Text>
        </View>
        <View>
          <Image style={styles.imgIntroduction} source={require("./img/olho.png")} />
          <Text style={styles.text}>Capacitar as mulheres a se encontrarem através do autocuidado.n</Text>
        </View>
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
    height: "90%",
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
    transform: [{ translateX: -50 }],
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
  containerIntroduction: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  imgIntroduction: {
    width: 30,
    height: 30,
    margin: 30,
    // marginTop: 1.5,
  },
  textIntroduction: {
    // margin: 15,
    fontSize: 20,
    alignItems: "center", 
    justifyContent: "center", 
    textAlign: "center", 
    left: 5,
  },

  text: {
    fontSize: 10,
    width: 100,
    textAlign: "center",
  },
});