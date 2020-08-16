import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
            <MaterialIcons style={styles.iconStyle} name='search' size={32} />
            <TextInput autoCorrect={false}
                autoCapitalize="none"
                value={searchTerm}
                onChangeText={(val) => onSearchTermChange(val)}
                style={styles.inputStyle} placeholder='Search'
                onEndEditing={() => { onSearchTermSubmit(searchTerm) }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 8
    },
    inputStyle: {
        flex: 1,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 32,
        alignSelf: 'center',
        marginHorizontal: 16
    }
});

export default SearchBar;

