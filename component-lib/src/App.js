import MyAwesomeComponent from './MyAwesomeComponent'
import './App.css';
import FetchingData from './FetchingData';
import PostingData from './PostingData';
import React, { useState } from 'react';

function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);

  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
    <div className="container">
      <button onClick={() => handleShowFetchDataDemo()} className="button">
        Fetching Data Demo
      </button>
      <button onClick={() => handleShowPostDataDemo()} className="button">
        Posting Data Demo
      </button>
      <hr />
      {showFetchData ? <FetchingData /> : <PostingData />}
    </div>
  );
}

export default App;