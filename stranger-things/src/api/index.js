import Posts from "../Posts";

const BASE_URL = "https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt";




export async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const results = await response.json();
        return results.data;
    } catch (error) {
        throw error;
    }
}

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

export const fetchProfile = async (loginToken) => {

    const resp = await fetch('https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${loginToken}`
        },
    })
    const data = await resp.json();
    return data;
}

export async function createMessage(postId, loginToken, message) {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/posts/${postId}/messages`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loginToken}`,
                },
                body: JSON.stringify({
                    message: {
                        content: `${message}`,
                    },
                }),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
