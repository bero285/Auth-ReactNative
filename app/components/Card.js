import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
export default function Card({ title, subtitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title} numberOfLine={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLine={2}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
  },
});
