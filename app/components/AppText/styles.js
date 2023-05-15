import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        color:"gold",
        fontFamily:Platform.OS === "android" ? "Roboto" : "avenir"
    },
})

export default styles