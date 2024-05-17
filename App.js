import React, { useState } from 'react';
import { View,Text,Button } from 'react-native';
import Login from './Login';
import { initializeApp } from '@react-native-firebase/app';
const App = () => {
  const [user, setUser] = useState(null);
  const signIn = async () => {
    try {
      const response = await firebase.auth().signInAnonymously();
      setUser(response.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  return (
    <View>
      <Login/>
    </View>
  );
};

export default App;


