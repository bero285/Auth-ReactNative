import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { Formik } from "formik";
export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
