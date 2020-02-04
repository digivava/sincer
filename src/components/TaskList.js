import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import Timer from './Timer';

export default class TaskList extends Component {
  state = {
    items: [
      {
        key: 'Fed Penny',
        // startTime: Date.UTC(2020, 2, 2, 3, 55),
        startTime: Date.now(),
      },
      {
        key: 'Watered plants',
        startTime: Date.UTC(2020, 1, 2, 3, 55),
      },
      {
        key: 'Started dryer',
        startTime: Date.UTC(2020, 1, 2, 3, 55),
      },
    ],
  };

  // TODO: format milliseconds to "ago"
  render() {
    return (
      <FlatList
        data={this.state.items}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.task}>{item.key}</Text>
              <Timer startTime={item.startTime} taskName={item.key} />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 20,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  task: {
    fontSize: 30,
  },
});
