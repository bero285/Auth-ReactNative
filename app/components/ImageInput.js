import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React,{useEffect,useState} from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";
export default function ImageInput({ imageUri, onChangeImage }) {

    const requestPermission = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA);
        if (!granted) {
          alert("you need to enable permissions to acces library");
        }
      };
      useEffect(() => {
        requestPermission();
    
        // selectImage()
      }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "are you sure that you want to delete this image", [
        {
          text: "yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "no",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        // onChangeImage(result.uri)
        onChangeImage(result.uri);
      } else {
        console.log("canceled");
      }
    } catch (error) {
      console.log("error image", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            colors={colors.medium}
            size={40}
            name="camera"
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 15,
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});
