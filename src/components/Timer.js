import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {convertTime} from '../utils.js';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.startTime = this.props.startTime;
  }

  state = {
    timeAgo: 0, // in ms
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    let currentTimeInMillis = Date.now();
    let exactTimeAgo = currentTimeInMillis - this.startTime;
    let convertedTime = convertTime(exactTimeAgo);
    this.setState({
      timeAgo: convertedTime,
    });
  };

  render() {
    return <Text style={styles.timer}>{this.state.timeAgo} ago</Text>;
  }
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 30,
  },
});
