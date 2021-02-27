import React from 'react'
import Post from "./Post"

import { useState, useEffect } from 'react';
import { fetchPosts, deletePost } from './api';
import PostSearchBar from './PostSearchBar';

// ctrl shift p to access everytthing
function Posts({storeloginUser, loginToken}) {
    const [posts, setPosts] = useState([{}]);
    useEffect(() => {
        fetchPosts(loginToken)
          .then(({ data }) => setPosts(data.posts))
         // if youre using variable here include them in dependancy array 
        // setPosts(results?.data?.posts ?? []); // null coalesce
        // ?. -> optional chaining 
    }, [setPosts]) 

    // ask ballyn if our files will collide on github merging? how does that work??
    // ******************USE BACKDROP MATERIAL UI FOR POST CREATION**********************
    // try to get the post centered, and give them all a box shadow
    console.log(posts)
    console.log(posts.isAuthor)
    const onDeletePost = (postId) => {
        deletePost(loginToken, postId)
            .then(()=> {
                setPosts(posts.filter(post => post._id !== postId))
            })
    }
    return (
        <>
        <div className = 'postSearchBar' style ={{
            display: 'flex',
            justifyContent : 'center',
            padding : '1.5%',
            marginBottom : '4.5%',
            marginTop: "2.5rem"
        }}> 
        <PostSearchBar/>
        </div>
        <div className = "postsList" style={{
            display : 'flex',
            flexDirection : 'column',
            marginLeft : '25%',
            }}>
            {/* needs a search bar and an add post button at the top */}
            {posts.map((post, index) => <Post 
            key={`post-${index}`} 
            postIsAuthor={post.isAuthor} 
            postId={post._id} 
            title = {post.title} 
            price = {post.price} 
            seller = {post.seller} 
            location = {post.location} 
            description ={post.description}
            loginToken = {loginToken}
            onDeletePost={onDeletePost}
            // postId={postId}
            // setPostId={setPostId}
            />)}
        </div>
        </>
    )
}
export default Posts;


   