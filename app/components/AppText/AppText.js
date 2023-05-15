import React from 'react'
import { Image,StyleSheet,View,Text, Platform } from 'react-native';

function AppText ({children,style, ...otherProps}){
  
    return (
    <Text style={[styles.text,style]} {...otherProps}
    >{children}</Text>
    
    )

}

const styles = StyleSheet.create({
    text:{
    //   color:"tomato",
      ...Platform.select({
        ios:{
            fontSize:20,
            fontFamily:"Avenir"
        },
        android:{
            fontSize:18,
            fontWeight:"400",
            fontFamily:"Roboto"
        } 
    })
    }
})
export default AppText;