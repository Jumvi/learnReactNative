import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./Todo";

interface TodoListsProps {
  tasks: string[];
  onDeleteTasks: (index: number) => void;
}

const TodoList: React.FC<TodoListsProps> = ({ tasks, onDeleteTasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => (
        <TodoItem task={item} onDelete={() => onDeleteTasks(index)} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TodoList;
