import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import axios from 'axios';

const baseURL = 'http://localhost:3000/'

const useFetch = (endURL) => {
    const[loading, setLoading] = useState(true);
    const[data, setData] = useState([]);
    const[error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseURL}${endURL}`);
                setData(response.data);
            }catch (error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        getPosts();
    }, [endURL]);

    return {data, loading, error};
}

export default useFetch;