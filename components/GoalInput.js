import { useCallback, useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';

function GoalInput({ isVisible, onAddGoal, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = useCallback((enteredText) => {
    setEnteredGoalText(enteredText);
  }, []);

  const addGoalHandler = useCallback(() => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }, [enteredGoalText, onAddGoal]);

  const cancelAddGoalHandler = useCallback(() => {
    onCancel();
    setEnteredGoalText('');
  }, [onCancel]);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput value={enteredGoalText} onChangeText={goalInputHandler} style={styles.goalInput} placeholder='Your goal' />
        <View style={styles.buttonsContainer}>
          <Button onPress={cancelAddGoalHandler} title='Cancel' color="#f31282" />
          <Button onPress={addGoalHandler} title='Add goal' color="#5e0acc" />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  goalInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '70%',
    marginBottom: 8,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
  }
});