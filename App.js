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
      </View>
      <View style={styles.content}>
        <Text>Open up App.js to start working on your app!</Text>
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
    height: "100%",
  },
  navbarText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});