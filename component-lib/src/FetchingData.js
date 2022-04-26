import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from './hooks/useFetch';

const FetchingData = () => {
    const[posts, setPosts] = useState([]);

    const {data, loading, error} = useFetch('posts');

    if(loading){
        return  <Loading />;
    }
    return (<>
        { data.length && data.map((data) => {
            return(
                <div key ={data.id}>
                    {data.title}
                </div>    
        )})}  
        </>);}
        
export default FetchingData;