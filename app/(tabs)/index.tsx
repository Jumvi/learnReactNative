import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  TextInput,
  View,
  Text,
} from "react-native";
import TodoList from "../../components/ListTodo";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const addTask = () => {
    if (text.length > 0) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  const deleteTask = (index: number) => {
    const taskToDelete = tasks[index];
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    alert(`Vous avez supprimé la tâche: ${taskToDelete}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          source={require("../../assets/images/Equipe2.jpeg")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TodoList App!</Text>
      </View>

      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your text"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <Button title="Add new task" onPress={addTask} />
        <TodoList tasks={tasks} onDeleteTasks={deleteTask} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  inputContainer: {
    padding: 10,
    color: "red",
  },
  input: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 360,
    height: 230,
  },
  bout: {
    color: "red",
  },
});
