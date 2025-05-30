import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState([]);
  const pattern = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  const sendPattern = async () => {
    try {
      const response = await axios.post('http://your-raspberry-pi-ip:5000/unlock', {
        pattern: userInput,
      });
      if (response.status === 200) {
        Alert.alert('Solenoid unlocked!');
      } else {
        Alert.alert('Invalid pattern lock!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnlock = () => {
    setUserInput(pattern);
    sendPattern();
  };

  return (
    <View>
      <Button title="Unlock" onPress={handleUnlock} />
    </View>
  );
};

export default App;
