import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../API/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text> {result.data.name} </Text>
            <FlatList 
                data={result.data.photos}
                key={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;