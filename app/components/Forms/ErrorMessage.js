import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText/AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <View>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
