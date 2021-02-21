import React from 'react'
import { Link } from 'react-router-dom';


function Login({ username, password, registerToken, loginToken, setloginToken }) {
    return (
        <main id="login">
            <div >
                <form id="login" onSubmit={e => {
                    e.preventDefault();
                    function auth() {
                        console.log(username, password);
                        localStorage.getItem(`${username}-Token`, registerToken);
                        console.log(registerToken);
                    }
                    auth();

                    fetch('https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/users/login', {
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
                    }).then(response => response.json())
                        .then(result => {
                            console.log(result);
                            const loginToken = result.data.token;
                            setloginToken(loginToken);
                        })
                        .catch(console.error);

                    if (loginToken) {
                        // <Link to="/posts"
                        // renderPosts();
                    } else {
                        console.error("Please Register Before Logging In");
                    }




                }}>
                    <div> Login:   </div>
                    <input type="text" value={username} placeholder="username" required />
                    <input type="password" value={password} placeholder="password" required />
                    <input type="submit" placeholder="Login" />
                </form>
            </div>
        </main>
    )
}

export default Login
