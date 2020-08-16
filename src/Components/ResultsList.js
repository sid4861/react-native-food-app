import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    
    return (
        <View>
            <Text style={styles.titleStyle} >{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => { navigation.navigate('ResultsShowScreen', {id: item.id}) }} >
                        <ResultsDetails result={item} />
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 4
    }
});

export default withNavigation(ResultsList);
