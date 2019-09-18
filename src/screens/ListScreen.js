import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Jesus', age: 'Ageless'},
        {name: 'Kgosi', age: 22},
        {name: 'Steve', age: 23},
        {name: 'Sean', age: 32},
        {name: 'Ferdi', age: 22},
        {name: 'Theo', age: 26},
        {name: 'Keanan', age: 30},
        {name: 'Josh', age: 43}
    ];

    return (
        <FlatList 
            
            keyExtractor={ friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {

                return ( 
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
                // element === { item: { name: 'Jesus' }, index: 0 }
                // item === { name: 'Friend #1' }
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20
    }
});

export default ListScreen;