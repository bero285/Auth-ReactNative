import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screen/ListingScreen";
import ListingDetails from "../screen/ListingDetails";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
  >
    <Stack.Screen
      name="Listing"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetails}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
