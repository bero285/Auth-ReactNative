import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View>
      <AppButton title={title} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({});
