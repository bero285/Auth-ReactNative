import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "./AppPicker";
import ErrorMessage from "./Forms/ErrorMessage";
import formik from "formik";
import { useFormikContext } from "formik";

export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <View>
      <AppPicker
        name="email"
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({});
