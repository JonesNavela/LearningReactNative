import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Jones';

    return (

        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={nameStyle.textStyle}>My name is {name}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

const nameStyle = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;