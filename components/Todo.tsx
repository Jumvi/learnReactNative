import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface TodoItemProps {
  task: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => {
  const styles = StyleSheet.create({
    card: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "white",
      textAlign: "center",
      color: "black",
      fontSize: 20,
      justifyContent: "space-between",
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
      elevation: 2,
    },
    bout: {
      backgroundColor: "green",
      padding: 5,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.card}>
      <Text>{task}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.bout}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
