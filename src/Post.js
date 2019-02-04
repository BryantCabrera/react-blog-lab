import React, { Component } from 'react';
import Comment from './Comment.js'

class Post extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>By {this.props.author}</p>
                <div>
                    <p>{this.props.body}</p>
                </div>
                <h3>Comments:</h3>
                <ul>
                    {this.props.comments.map ((comment, index) => <li><Comment body={comment} /></li>)}
                </ul>   
            </div>
        );
    }
}

export default Post;