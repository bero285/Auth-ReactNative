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
import AppNavigator from "../Navigation/AppNavigator";
import AuthNavigator from "../Navigation/AuthNavigator";
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("AppNavigator")}
        validationSchema={validationSchema}
      >
        <>
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

          <SubmitButton
            title="Login"
            // onPress={() => }
          />
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
