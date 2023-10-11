import { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ id, text, onDeleteItem }) {
  const deleteGoalHandler = useCallback(() => {
    onDeleteItem(id);
  }, []);

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#210644' }} onPress={deleteGoalHandler}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: '#ffffff',
  }
});