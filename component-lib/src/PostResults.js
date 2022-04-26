import React, { useEffect, useState } from 'react';
import axios from 'axios';
import usePost from './hooks/usePost';
import Loading from './Loading';

const PostingData = (props) => {
    const [posts, setPosts] = useState([]);

    const object = {
        userId: props.inputID,
        title: props.inputTitle,
        body: props.inputBody
    }
    const goBack = (event) => {
        window.location.reload();
    }
    const { data, loading, error } = usePost('posts', object);
    return (
        loading ?
            <>
                <Loading />
            </>
            : error == '' ?
            <>
                {/*This might be cheating, after loading if no error displays its props*/}
                <label>UserID</label>
                <b style = {{marginLeft:20}}>{props.inputID}</b>
                <label>Title</label>
                <b style = {{marginLeft:20}}>{props.inputTitle}</b>
                <label>Body</label>
                <b style = {{marginLeft:20}}>{props.inputBody}</b>
                <button onClick = {goBack} className="button">
                    Go Back
                </button>  
            </>
            :
            <>
                <label className="form-label" style={{color:"red",fontSize:"20px"}}>There was an error sending the data to database</label>
            </>
    );
}

export default PostingData;