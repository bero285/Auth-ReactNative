import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
    <Stack.Screen
      name="LogOut"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
