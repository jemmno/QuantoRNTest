import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ListEmpty extends React.PureComponent {
  render() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{this.props.message}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    emptyText: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black'
    },
    emptyTextConsejo: {
        color: 'black',
        textAlign: 'center',

    }
  });