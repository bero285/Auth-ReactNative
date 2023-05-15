import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import constants from "expo-constants";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => {
            console.log("mesage selected", item);
          }}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={() => {
        ListItemSeperator;
      }}
      refreshing={refreshing}
      //     onRefresh={()=>{
      //         setMessages(
      //             [{
      //     id:2,
      //     title:"T2",
      //     description:"D2",
      //     image: require("../assets/profile.png")

      // }]
      //         )
      //     }}
    />
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
