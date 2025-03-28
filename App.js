import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, Link } from "react-native";

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
        <Text style={styles.textIntroductionStyle}>Colocar uma breve descrição sobre a representação dos icones aqui, ou um slogan</Text>

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
        <Pressable style={styles.button}>
          <Text>Botão</Text>
        </Pressable>
      </View>
      <View style={styles.containerFather}>
        <View style={styles.containerRight}>
          <Image source={images.rightImage} style={styles.imageContainerRight} />
        </View>
        <View style={styles.containerLeft}>
          <Text style={styles.containerLeftTitle}>Colocar título aqui</Text>
          <Text style={styles.containerLeftSubitle}>Colocar descrição curta  aqui</Text>
          <View style={styles.containerLeftLinks}>
            <Pressable style={styles.link}>
              <Image source={images.cabelo} style={styles.imageContainerRight} />
              <Text>Botão</Text>
            </Pressable>
            <Pressable style={styles.link}>
              <Image source={images.maquiagem} style={styles.imageContainerRight} />
              <Text>Botão</Text>
            </Pressable>
            <Pressable style={styles.link}>
              <Image source={images.skincare} style={styles.imageContainerRight} />
              <Text>Botão</Text>
            </Pressable>
          </View>
          <Pressable style={styles.buttonLink}>
            <Text style={styles.buttonLinkText}>Ler Mais →</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTextStyles}>Contato</Text>
            <Text style={styles.footerTextStyles}>Administração</Text>
          </View>
            <View style={styles.footerNavbar}>
              <Text style={styles.footerTextStylesNavbar}>Home</Text>
              <Text style={styles.footerTextStylesNavbar}>Dicas</Text>
              <Text style={styles.footerTextStylesNavbar}>Podcast</Text>
          </View>
          <View style={styles.footerSocialMedia}>
            <Text style={styles.footerTextStyles}>Instagram</Text>
            <Text style={styles.footerTextStyles}>Facebook</Text>
            <Text style={styles.footerTextStyles}>Twitter</Text>
          </View>
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
    height: 40,
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
    margin: 15,
  },
  imgIntroduction: {
    width: 30,
    height: 30,
    margin: 30,
    // marginTop: 1.5,
  },
  button: {
    backgroundColor: '#A7D6ED',
    padding: "10px",
    // width: "140px",
    height: "30px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

  },
  textIntroduction: {
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  textIntroductionStyle: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Poppins_100Thin",
    fontStyle: "italic",
    color: "#0070A6",
  },

  text: {
    fontSize: 10,
    width: 100,
    textAlign: "center",
    fontFamily: "Poppins_100Thin",
  },
  containerFather: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "170px",
  },
  containerRight: {
    width: "50%",
    height: "100%",
  },
  rightImage: {
    width: "100%",
    height: "100%",
  },
  containerLeft: {
    width: "50%",
    backgroundColor: "#f0f0f0",
    height: "100%",
    padding: 10,
    gap: 15,
  },
  containerLeftTitle: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Poppins_100Thin",
  },
  containerLeftSubitle: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Poppins_100Thin",
  },
  containerLeftLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    padding: "10px",
    // width: "30%",
    height: "60px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerRight: {
    width: "100%",
    height: "100%",
  },
  buttonLink: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLinkText: {
    fontStyle: "italic",
    color: "#0070A6",
  },
  footer: {
    backgroundColor: "#A7D6ED",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    color: "white",
    flexDirection: "column",
    gap: 10,
  },
  footerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    // width: "50%",
  },
  footerTextContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footerHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 25,
  },
  footerNavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  footerSocialMedia: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footerTextStyles: {
    color: "white",
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Poppins_100Thin",
  },
  footerTextStylesNavbar: {
    color: "white",
    fontSize: 15,
    textAlign: "left",
    fontFamily: "Poppins",
  },
});