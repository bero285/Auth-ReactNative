import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/StylesConf"
export default function AppTextInput({ icon,width, ...otherProps }) {
  return (
    <View style={[styles.container,{width:width}]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} colors={colors.medium} style={styles.icon} />}
      <TextInput style={defaultStyles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 45,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    
    alignItems:"center"
  },
 
  icon:{
    marginRight:10,
  }
});
