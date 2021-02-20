import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Login({ token, username, password, registerToken }) {
    return (
        <div>
            <form id="login" onSubmit={e => {
                e.preventDefault();
                function auth() {
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
                    })
                    .catch(console.error);

                if (auth) {
                    // <Router>
                    //     <Switch>
                    //         <Route exact path="/posts">
                    //             <Post token={token} />
                    //         </Route>
                    //     </Switch>
                    // </Router>
                } else {
                    console.error("Please Register Before Logging In");
                }




            }}>
                <input type="text" value={username} placeholder="username" required />
                <input type="text" value={password} placeholder="password" required />
                <input type="submit" placeholder="Login" />
            </form>
        </div>
    )
}

export default Login
