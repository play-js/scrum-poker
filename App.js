import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokerCard } from 'components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} onPress={() => alert(111)}>
        <PokerCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
