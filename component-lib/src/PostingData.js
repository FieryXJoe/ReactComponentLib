import React, { useEffect, useState } from 'react';
import axios from 'axios';
import usePost from './hooks/usePost';
import Loading from './Loading';

const PostingData = () => {
    const[posts, setPosts] = useState([]);

    const {data, loading, error} = usePost('posts');

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
        
export default PostingData;