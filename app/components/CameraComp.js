import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ErrorMessage from "./Forms/ErrorMessage";

export default function CameraComp({ name, onChangeImage, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  const [lib, setLib] = useState([]);
  const [fil, setFil] = useState();

  // useEffect(() => {

  // }, [imageUri]);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        // onChangeImage(result.uri)
        setLib((prev) => [...prev, result.uri]);
      } else {
        console.log("canceled");
      }
    } catch (error) {
      console.log("error image", error);
    }
  };

  const filterImg = (phot) => {
    setLib(
      lib.filter((uri) => {
        uri != phot;
      })
    );
  };
  const handlePress = () => {
    if (!lib.canceled) selectImage();
  };

  // Alert("Delete",'are you sure you want to delete a photo',[
  //   {
  //     text:"yes",onPress:()=>{}
  //   },
  //   {
  //     text:"no",onPress:()=>{}
  //   }
  // ])

  const handleChangeItem = (e) => {
    console.log(e.target.index);
  };
  return (
    <View>
      <View style={styles.container}>
        {/* {imageUri && <Image source={{ uri: imageUri }} style={styles.library} />} */}
        {lib &&
          lib.map((phot, index) => {
            return (
              <TouchableOpacity key={index} onPress={filterImg(phot)}>
                <Image
                  key={index}
                  source={{ uri: phot }}
                  style={styles.library}
                />
              </TouchableOpacity>
            );
          })}
        <TouchableOpacity
          onPress={selectImage}
          style={styles.click}
          onBlur={() => setFieldTouched(name)}
        >
          <Image
            style={styles.imageLogo}
            source={require("../assets/camera.png")}
          />
        </TouchableOpacity>
        {/* <Image
          style={styles.imageLogo}
          source={require("../assets/camera.png")}
        />
   
      <Button
        title="Select Image"
        style={styles.button}
        onPress={selectImage}
      ></Button>

      {imageUri && <Image source={{ url: imageUri }} />} */}
      </View>

      {/* <ErrorMessage error={errors[name]} visible={touched[name] }/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    // padding: 20,
    // paddingTop:20
  },
  imageLogo: {
    width: 90,
    height: 90,
    // marginLeft:10
  },
  click: {
    width: 90,
    height: 90,
  },
  library: {
    width: 90,
    height: 90,
    borderRadius: 30,
    marginLeft: 10,
    overflow: "hidden",
    // backgroundColor:"red"
  },
});
