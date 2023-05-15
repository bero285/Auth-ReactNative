import React from 'react';
import { Image,StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"
function ViewImageScreen(props) {
    return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.closeIcon}><MaterialCommunityIcons size={30} name="close" color="white"/></View>
    <View style={styles.deleteIcon}><MaterialCommunityIcons size={35} name="delete" color="white"/></View>
      <Image 
      resizeMode='contain'
      style={styles.image} 
      source={require("../assets/chair.jpg")}/>
       </View>
      </SafeAreaView>
     
    );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{
        backgroundColor:colors.black,
        height:"100%",
       
    },
    closeIcon:{
        // width:50,
        // height:50,
        // backgroundColor:colors.primary,
        position:"absolute",
        top:40,
        left:30
    },
    deleteIcon:{
        // width:50,
        // height:50,
        // backgroundColor:colors.secondary,
        position:"absolute",
        top:40,
        right:30
    }
})
export default ViewImageScreen;