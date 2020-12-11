import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import TextCPN from '../components/TextCPN';

export default function (props) {
  const item = Number.parseInt(props.route.params, 10);

  return (
    <View testID={"DetailsScreen"}>
      <TextCPN />
      <TextCPN style={styles.body}>the number you have chosen is {item}</TextCPN>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
  body: {
    textAlign: 'center',
  },
});