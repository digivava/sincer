import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TaskList from './src/components/TaskList';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TaskList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
