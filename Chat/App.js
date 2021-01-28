import React, { useState } from 'react';
import { StyleSheet, View, LogBox  } from 'react-native';
import { Container } from "native-base";

import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

LogBox.ignoreLogs(['Warning: Setting a timer']);

export default function App() {
  const [userName, setUserName] = useState(null)//Si=Null=No está logueado

  return (
    <Container style={styles.container}>
      {!userName ? (
        <Login setUserName={setUserName} />
      ) : (
        <Chat userName={userName} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b' //tema Dark
  }
})
