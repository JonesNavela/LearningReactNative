import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                score="Image Score - 9"
                //or score={9}
                imageSource={require('../../assets/forest.jpg')} 
            />

            <ImageDetail 
                title="Beach" 
                score="Image Score - 7"
                imageSource={require('../../assets/beach.jpg')} 
            />

            <ImageDetail 
                title="Mountain" 
                score="Image Score - 4"
                imageSource={require('../../assets/mountain.jpg')} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;