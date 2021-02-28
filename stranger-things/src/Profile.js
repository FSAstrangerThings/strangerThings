import React from 'react';
import { fetchProfile } from './api';
import { useEffect, useState } from 'react';
import Post from "./Post"



function Profile({ loginToken }) {

    const [profile, setProfile] = useState({ data: {} })

    useEffect(async () => {
        try {
            const data = await fetchProfile(loginToken);
            console.log(data)
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
        },
    } = profile

    console.log("profile", profile);

    return (
        <div>
            {(messages || []).map((m, i) => <div key={i}>{m.content}</div>)}
            {(posts || []).map((p, i) => <div key={i}>{p.title}</div>)}
        </div>
    )
}

export default Profile