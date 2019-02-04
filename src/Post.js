import React, { Component } from 'react';
import Comment from './Comment.js'

// class Post extends Component {
const Post = ({title, author, body, comments, handleClick}) => {
    // constructor () {
    //     super();
    //     // this.state = {
    //     //     body: 
    //     // }
    // }

    return (
        <div>
            <h1>{title}</h1>
            <p>By {author}</p>
            <div>
                <p>{body}</p>
            </div>
            <h3>Comments:</h3>
            <ul>
                {comments.map ((comment, index) => <li><Comment body={comment} /></li>)}
            </ul>  
            <button onClick={handleClick}>Handle Click</button> 
        </div>
    );
}

export default Post;