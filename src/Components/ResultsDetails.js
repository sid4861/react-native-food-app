import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle} >{result.name}</Text>
            <Text> {result.rating} stars, {result.review_count} reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 16
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 4
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;