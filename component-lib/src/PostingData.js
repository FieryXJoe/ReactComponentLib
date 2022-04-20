import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchingData = () => {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.post("http://localhost:3000/posts");
            setPosts(response.data);
        };
        getPosts();
    }, []);

    return (<div>
        { posts.length && posts.map((post) => {
            return <div key ={post.id}>{post.title}</div>;
        })}
    </div>);
}

export default FetchingData;