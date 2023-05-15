import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
export default function NewListingButton ({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40}/>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        height:70,
        width:70,
        borderRadius:35,
        bottom:30,
        borderWidth:10 ,
        borderColor:"white"
    }
})