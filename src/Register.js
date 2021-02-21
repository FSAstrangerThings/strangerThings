import React from 'react';
import { useState } from 'react';


function Register({ username, password, setUsername, setPassword, setregisterToken, }) {


    const submitLogin = (username, password, confirmPassword) => {
        console.log(username, password, confirmPassword);

        fetch('https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt/users/register', {
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
                const userToken = result.data.token;
                console.log(userToken);
                setregisterToken(userToken);
                localStorage.setItem(`${username}-Token`, userToken);
                console.log(localStorage);
            })
            .catch(console.error);


    }

    const [confirmPassword, setconfirmPassword] = useState("");

    return (

        <main id="register">
            <div>
                <form id="register" onSubmit={e => {
                    e.preventDefault();
                    submitLogin(username, password, confirmPassword);
                }}>
                    <div> Register: </div>
                    <input className="registerUsername" type="text" onChange={(event) => setUsername(event.target.value)} value={username} placeholder="username" required />
                    <input className="registerPassword" type="text" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="password" required minLength="8" />
                    <input type="text" onChange={(event) => setconfirmPassword(event.target.value)} value={confirmPassword}
                        {...confirmPassword === password ? confirmPassword : null}
                        placeholder="confirm password" required minLength="8" />
                    <input type="submit" />
                </form>
            </div>
        </main>
    )
}

export default Register