import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import colors from "../config/colors";
import AppNavigator from "./AppNavigator";
const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
      <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
