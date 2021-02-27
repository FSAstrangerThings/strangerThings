import React from 'react';
import { fetchProfile } from './api';
import { useEffect, useState } from 'react';



function Profile({ loginToken, userMessages, setUserMessages, userPosts, setUserPosts }) {

    const [profile, setProfile] = useState({ data: {} })

    useEffect(async () => {
        try {
            const data = await fetchProfile(loginToken);
            console.log(data);
            let userMessage = data.data.messages;
            setUserMessages(userMessage);
            let userPost = data.data.posts;
            setUserPosts(userPost);
            setProfile(data)
        } catch (error) {
            console.error(error);
        }
    }, [])

    const {
        data: {
            messages,
            posts,
            username,
            cohort,
            title,
            price,
            description,
        },
    } = profile

    return (
        <div>
            {(messages || []).map((m, i) => <div key={i}>{m.content}</div>)}
            {(posts || []).map((p, i) => <div key={i}>{p}</div>)}
            {/* {posts.map(post => <Post title={posts.title} price={post.price} seller={post.seller} location={post.location}
                    description={post.description} post={post} />)} */}
            {username}
        </div>
    )
}

export default Profile