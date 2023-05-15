import React from 'react'
import { View,Image,StyleSheet } from 'react-native'
import AppText from '../components/AppText/AppText'
import colors from "../config/colors"
import ListItem from '../components/ListItem'
export default function ListingDetails({route}) {
    const Listing = route.params
  return (
    <View>
        <Image style={styles.image} source={Listing.image}/>
       <View style={styles.detailsContainer}> 
       <AppText style={styles.title}>{Listing.title}</AppText>
        <AppText style={styles.price}>{Listing.price}</AppText>
        <View style={styles.useContainer}>
        <ListItem
            image={require("../assets/profile.png")}
            title="muhamed ali"
            subTitle="5 listing"
        />
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
        width:"100%",
        height:300
    },
    detailsContainer:{
        padding:20,

    },
    title:{
        fontSize:24,


    },
    price:{
        color:colors.secondary,
        fontSize:20,
        marginVertical:10
    },
    useContainer:{
        marginVertical:30
    }
})
