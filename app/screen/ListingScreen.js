import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../Navigation/Route"
const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpeg"),
  },
];

export default function ListingScreen({navigation}) {
  return (
    <View style={styles.screen}>
   
      <View>
     
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
            (<Card
              title={item.title}
              subtitle={"$" + item.price}
              image={item.image}
              onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
            />)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    height: "100%",
  },
});
