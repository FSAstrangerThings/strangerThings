import React from 'react';
import { useState } from 'react';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/posts"

export async function fetchPosts() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        throw error;
    }
};

export const fetchLogin = async (username, password) => {

    await fetch('https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: `${username}`,
                password: `${password}`
            }
        })
    }
    )
}