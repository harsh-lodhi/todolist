import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const Tasks = (props) => {
  const { item, taskItems, index, setTaskItems } = props;

  const deleteItem = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const completeTask = () => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{item.title}</Text>
        
      </View>
      <View style={styles.icon}>
      <Text>{item.completed ? "✓" : "x"}</Text>
        
        <View style={styles.buttonContainer}>
        <Button title={item.completed ? "Undone" : "Done"} onPress={completeTask} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Delete" onPress={deleteItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "65%", 
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "70%", 
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", 
    width: "30%", 
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
});

export default Tasks;
