import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import axios from 'axios';

const FetchingData = () => {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try{
                const response = await axios.get("http://localhost:3000/posts");
                setPosts(response.data);
            }catch (error){
                console.log(error);
            }
        };
        getPosts();
    }, []);

    return (<div>
        { posts.length ? posts.map((post) => {
            return <div key ={post.id}>{post.title}</div>;
        }): <Loading />}
    </div>);
}

export default FetchingData;