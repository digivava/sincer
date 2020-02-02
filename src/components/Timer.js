import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class Timer extends Component {
  state = {
    timeAgo: 0, // in ms
  };

  componentDidMount() {
    // update time shown every 1 minute
    const updateInterval = 60000;
    setInterval(
      () =>
        this.setState(previousState => ({
          timeAgo: previousState.timeAgo + updateInterval,
        })),
      updateInterval,
    );
  }

  render() {
    return (
      <Text style={styles.timer}>
        {this.state.timeAgo % 60 === 0 ? this.state.timeAgo : null}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 30,
  },
});
