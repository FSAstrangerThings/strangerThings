import React from 'react'
import Post from "./Post"

import { useState, useEffect } from 'react';
import { fetchPosts } from './api';
import PostSearchBar from './PostSearchBar';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts()
          .then(({ data }) => setPosts(data.posts))
          
         // if youre using variable here include them in dependancy array 
        // setPosts(results?.data?.posts ?? []); // null coalesce
        // ?. -> optional chaining 
    }, []) 

    // ask ballyn if our files will collide on github merging? how does that work??
    // ******************USE BACKDROP MATERIAL UI FOR POST CREATION**********************
    // try to get the post centered, and give them all a box shadow
    console.log(posts)
    return (
        <>
        <div className = 'postSearchBar' style ={{
            display: 'flex',
            justifyContent : 'center',
            padding : '1.5%',
            marginBottom : '4.5%',
        }}> 
        <PostSearchBar/>
        </div>
        <div className = "postsList" style={{
            display : 'flex',
            flexDirection : 'column',
            marginLeft : '25%',
            }}>
            {/* needs a search bar and an add post button at the top */}
            {posts.map(post => <Post title = {post.title} price = {post.price} seller = {post.seller} location = {post.location} description ={post.description}/>)}
        </div>
        </>
    )
}
export default Posts;


   