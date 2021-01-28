import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface Props {
  message: string,
  onPressRetry: any
}
export const ListEmpty = (props: Props): React.ReactElement => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{props.message}</Text>
      <Button onPress={props.onPressRetry} title='Reintentar?'/>
    </View>
  );
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