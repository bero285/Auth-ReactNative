import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingScreen from "../screen/ListingScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator 
 screenOptions={{
    tabBarStyle: { backgroundColor:"white",borderColor:"white" },
  }}
  >
    <Tab.Screen
        
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons color={color} size={size} name="home" />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons color="red" size={size} name="plus-circle" />
        ),
      })}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons color={color} size={size} name="account" />
        ),
      }}
      name="Account"
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
