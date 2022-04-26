import React, { useEffect, useState } from 'react';
import axios from 'axios';
import usePost from './hooks/usePost';
import Loading from './Loading';
import PostResults from './PostResults';

const PostingData = () => {
    const [posts, setPosts] = useState([]);

    const [userID, setUserID] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    //In case I have time for validating UserId as int
    const [isErrorVisible, setErrorVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Runs on form submit, contains code previously always running
    const submitForm = (event) => {
        setIsSubmitted(true);
    }
    return (
        isSubmitted ? 
        <>
            <PostResults inputID={userID} inputTitle = {title} inputBody = {body}>
            </PostResults>
        </>
        :
        <>
        <label className="form-label">User ID</label><br />
        <input type="number" value={userID} onChange={(event) => setUserID(event.target.value)} />
        <br /><br /><label className="form-label">Title</label><br />
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br /><br /><label className="form-label">Body</label><br />
        <input type="email" value={body} onChange={(event) => setBody(event.target.value)} />
        <br />
        {isErrorVisible && <label className="form-label" style={{color:"red",fontSize:"20px"}}>Form failed validation</label>}
        <br />
        <button onClick = {submitForm} className="button">
            Submit
        </button>

    </>

    );
}

export default PostingData;