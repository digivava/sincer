import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import Timer from './Timer';

export default class TaskList extends Component {
  state = {
    items: [
      {key: 'Fed Penny', startTime: new Date(Date.UTC(96, 1, 2, 3, 4, 5))},
      {key: 'Watered plants', startTime: new Date(Date.UTC(96, 1, 2, 3, 4, 5))},
      {key: 'Started dryer', startTime: new Date(Date.UTC(96, 1, 2, 3, 4, 5))},
    ],
  };

  // componentDidMount() {
  //   // update time shown every 1 minute
  //   setInterval(
  //     () =>
  //       this.setState(previousState => ({
  //         // for each item in task list
  //         // calculate Date.now() - item.startTime
  //         // set item.timeAgo to that
  //         previousState.items.map(
  //           //
  //         )
  //       })),
  //     60000,
  //     //   1000,
  //   );
  // }

  // TODO: format milliseconds to "ago"
  render() {
    return (
      <FlatList
        data={this.state.items}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.task}>{item.key}</Text>
              <Timer startTime={item.startTime} />
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
