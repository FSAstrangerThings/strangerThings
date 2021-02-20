import React from 'react';
import { useState } from 'react';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/posts"


function Api() {

    return useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            console.log(data);
        }
        fetchPosts();

    }, []);

}



export default Api;
