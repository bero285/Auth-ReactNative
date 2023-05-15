import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as yup from "yup";
import AppText from "../components/AppText/AppText";
import ErrorMessage from "../components/Forms/ErrorMessage";
import AppFormFill from "../components/Forms/AppFormFill";
import SubmitButton from "../components/Forms/SubmitButton";
import AppForm from "../components/Forms/AppForm";

const validationSchema = yup.object().shape({
  name:yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
 

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{name:"", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <>
          <AppFormFill
            name="name"
            autoCapitalize="none"
            icon="lightbulb-on-outline"
            placeholder="Name"
            autoCorrect={false}
            keyboardType="email-address"
            // textContentType=""
          />
          <AppFormFill
            name="email"
            autoCapitalize="none"
            icon="email"
            placeholder="Email"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <AppFormFill
            name="password"
            autoCapitalize="none"
            icon="lock"
            placeholder="Password"
            autoCorrect={false}
            keyboardType="password"
            textContentType="password"
            secureTextEntry
          />

          <SubmitButton title="Register" />
        </>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 60,
    height: 90,

    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
