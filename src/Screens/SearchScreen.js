import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../API/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = ( ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // console.log(results);
        console.log(`group by price = ${price}`);
        return results.filter((result) => {
            return result.price === price
        });
    };

    return (
        <View style={styles.viewStyle} >
            <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onSearchTermSubmit={searchApi} />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="cost effective"  />
                <ResultsList results={filterResultsByPrice('$$')} title="bit pricier"  />
                <ResultsList results={filterResultsByPrice('$$$')} title="big spender"  />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        padding: 12,
        flex: 1
    }
});

export default SearchScreen;

