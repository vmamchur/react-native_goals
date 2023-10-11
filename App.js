import { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isGoalInputVisible, setIsGoalInputVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const toggleAddGoalHandler = useCallback(() => {
    setIsGoalInputVisible((prevState) => !prevState);
  }, []);

  const goalAddHandler = useCallback((enteredGoalText) => {
    if (!enteredGoalText.trim().length) {
      return;
    }

    setGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), text: enteredGoalText }]);
    toggleAddGoalHandler();
  }, []);

  const deleteGoalHandler = useCallback((id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }, []);

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={styles.appContainer}>
        <Button onPress={toggleAddGoalHandler} title="Add new goal" color="#5e0acc" />
        <GoalInput isVisible={isGoalInputVisible} onAddGoal={goalAddHandler} onCancel={toggleAddGoalHandler} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            )}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
