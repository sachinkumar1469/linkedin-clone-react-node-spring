import React from 'react';

// Local imports
import "./centerMain.scss";
import NewPost from './posts/NewPost';
import Post from './posts/Post';

function CenterMain() {
  return (
    <div className='center-main'>
      <NewPost/>
      <div className="posts">
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default CenterMain
