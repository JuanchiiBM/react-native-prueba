import React from 'react'
import Constants from 'expo-constants'
import { Text, View, StyleSheet } from 'react-native'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Hello world!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;
