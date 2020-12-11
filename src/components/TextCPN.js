import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function (props) {

    return (
        <Text style={styles.header}>Showing details for {item}</Text>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 16,
    }
});