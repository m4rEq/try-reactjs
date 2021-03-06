import React, { Component } from 'react';
import PostData from '../data/posts.json';

import PostDetail from './PostDetail'

class PostList extends Component {

    constructor(props) {
        super(props);
        this.handleDataCallback = this.handleDataCallback.bind(this);
    }

    handleDataCallback(postItem) {
        //alert(txtMSG);
        //console.log(this);
        console.log(postItem);
    }

    render() {
        return (
            <div>
                <h1>Post List</h1><br></br>
                {PostData.map((item, index)=>{
                    return <PostDetail 
                        post={item} 
                        key={`post-list-key ${index}`} 
                        dataCallback={this.handleDataCallback}/>
                })}
            </div>
        );
    }
}

export default PostList;