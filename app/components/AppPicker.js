import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/StylesConf";
import AppText from "./AppText/AppText";
import PickerItem from "./PickerItem";
export default function AppPicker({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              colors={defaultStyles.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            colors={defaultStyles.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <Button
            title="Close"
            onPress={() => {
              setModalVisible(false);
            }}
          />
          <View style={styles.pickContainer}>
            <FlatList
             numColumns={3}
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <View style={styles.tag}>
                  <PickerItem
                  
                    label={item.label}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </React.Fragment>
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

    alignItems: "center",
  },
 
  pickContainer: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center",
    
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
