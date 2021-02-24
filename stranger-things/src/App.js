import React from 'react'
import Header from "./Header"
import './App.css';
import Posts from "./Posts";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"
import Profile from './Profile';
import Register from './Register';
import {useState} from 'react'

// ask about merging branches and file collision, and package downloads, imports, etc
// ask about getting a box shadow on the searchbar
// Why isnt the react switch routing working on the header component?

const Secured = ({ storeloginUser, loginToken }) => {
  return (
    <>
    <Header />
    <Route exact path ='/home'>
      <Home storeloginUser = {storeloginUser}/>
    </Route>
    
    <Route exact path ='/posts'>
      <Posts />
    </Route>
  
    <Route exact path ='/profile'>
      <Profile loginToken={loginToken} storeloginUser= {storeloginUser} />
    </Route>
    </>
  )
}

function App() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerToken, setregisterToken] = useState("");
  const [loginToken, setloginToken] = useState("");
  const [storeloginUser, setstoreloginUser] = useState("");
  const [storeloginPass, setstoreloginPass] = useState("");
  // const [postId, setPostId] = useState("")
  // const [message, setMessage] = useState("")
 

  return (
    <Router>
      <div className="App">
      {/* the login component reroutes to profile (messages) */}
      
      
        <Switch>
          <Route exact path ='/'>
            <Login registerToken={registerToken} username={username} password={password} 
            setregisterToken={setregisterToken} loginToken={loginToken} setloginToken={setloginToken}
            storeloginUser={storeloginUser} setstoreloginUser={setstoreloginUser}
            storeloginPass={storeloginPass} setstoreloginPass={setstoreloginPass}
            />
          </Route>

          <Route exact path ='/register'>
            <Register  
            username={username} password={password} setUsername={setUsername} 
            setPassword={setPassword} setregisterToken={setregisterToken} registerToken={registerToken} 
            />
          </Route>
          <Secured storeloginUser = {storeloginUser} loginToken={loginToken} />
        </Switch>
        
      {/* adding post button routes to a new url /posts/add 
      when looking at an individual post the url changes to the post ID*/}
      {/* Home */}
      {/* Profile */}
      {/* Logout */}
      </div>
    </Router>
  );
}




export default App;
