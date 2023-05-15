import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              {title && <AppText numberOfLines={1}  style={styles.title}>{title}</AppText>}
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor:colors.white,
    alignItems:"center"
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // marginRight:10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
  },
});
