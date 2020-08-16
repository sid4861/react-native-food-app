import {useState, useEffect} from 'react';
import yelp from '../API/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (defaultSearch) => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: defaultSearch,
                    location: 'san jose'
                }
            });

            setResults(response.data.businesses);
        }
        catch (error) {
            setErrorMessage('Something went wrong');
        }

    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};