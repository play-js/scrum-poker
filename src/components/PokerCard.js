import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#00f',
    },
  });

class PokerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button 
                title="Button"
                onPress={() => alert(1111)}
                color="red"
                // style={styles.button}
                style={{ backgroundColor: '#0f0' }}
            />
        );
    }
}

export default PokerCard;