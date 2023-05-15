import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText/AppText";

export default function PickerItem({ label, onPress, Source }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.image}/>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    width: 110,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
    marginTop: 20,
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "red",
  },
});
