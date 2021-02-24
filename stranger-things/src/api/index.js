import Posts from "../Posts";

const BASE_URL = "https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt";



    
export const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    console.log(data._id)
    return data;
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
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

export const createMessage = async (loginToken) => {
    fetch(`https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8d1bd48829fb0017d2233b/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${loginToken}`
  },
  body: JSON.stringify({
    message: {
      content: "asdfashdlfkhja"
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
    




