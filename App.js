import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
// import Practice from './app/screen/Practice'
// import TextStyling from './app/screen/TextStyling'
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetails from "./app/screen/ListingDetails";
import MessagesScreen from "./app/screen/MessagesScreen";
import Icon from "./app/components/Icon.js";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screen/AccountScreen";
import ListingScreen from "./app/screen/ListingScreen";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screen/LoginScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import RegisterScreen from "./app/screen/RegisterScreen";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import CameraComp from "./app/components/CameraComp";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import NavigationTheme from "./app/Navigation/NavigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";
import AccountNavigator from "./app/Navigation/AccountNavigator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer theme={NavigationTheme}>
 <AppNavigator/>
<AuthNavigator/>
 </NavigationContainer>
      {/* <CameraComp /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

//navigation

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("tweetDetails", { id: 1 })}
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <View>
//     <Text>Tweet</Text>
//     <Link />
//   </View>
// );
// const TweetDetails = ({ route }) => (
//   <View>
//     <Text>Tweet {route.params.id}</Text>
//   </View>
// );
// const Account = () => (
//   <View>
//     <Text>Account</Text>
//   </View>
// );
// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//     initialRouteName="tweets"
//   >
//     <Stack.Screen name="tweets" component={Tweets} />
//     <Stack.Screen
//       name="tweetDetails"
//       component={TweetDetails}
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white",
//       }}
//     />
//   </Stack.Navigator>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "tomato",
//       activeTintColor: "white",
//       inactiveBackgroundColor: "#eee",
//       inactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="feed"
//       component={StackNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons color={color} name="home" size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Account"
//       component={Account}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons color={color} name="account" size={size} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default function App() {
//   const [imageUris, setImageUris] = useState([]);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <NavigationContainer>
//         {/* <StackNavigator /> */}
//         <TabNavigator />
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

{
  /* <CameraComp/> */
}
{
  /* <Button title="press" onPress={selectImage}/> */
}

{
  /* <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri)=>{handleRemove(uri)}}
      /> */
}

// const requestPermission = async () => {
//   const { granted } = await Permissions.askAsync(Permissions.CAMERA);
//   if (!granted) {
//     alert("you need to enable permissions to acces library");
//   }
// };
// useEffect(() => {
//   requestPermission();

//   // selectImage()
// }, []);

// const selectImage = async () => {
//   try {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality:0.5
//     });
//     if (!result.canceled) {
//       // onChangeImage(result.uri)
//      setImageUri(result.uri)
//     } else {
//       console.log("canceled");
//     }
//   } catch (error) {
//     console.log("error image", error);
//   }
// };
// const handleAdd = (uri)=>{
//   setImageUris([...imageUris,uri] )
// }
// const handleRemove = (uri)=>{
//   setImageUris(imageUris.filter(imageUri=>imageUri != uri ))
// }
