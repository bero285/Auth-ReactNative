import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.tagline}>Sell what you dont need</Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <AppButton title="Login" color="primary" onPress={()=>navigation.navigate("Login")} />
        <AppButton title="Register" color="secondary" onPress={()=>navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ButtonsContainer: {
    padding: 20,
    width: "100%",
  },
  RegisterButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",

    top: 70,
  },
  tagline: {
    fontSize: 25,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
