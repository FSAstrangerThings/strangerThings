import React, { useState } from 'react'
import Header from "./Header"
import './App.css';
import Posts from "./Posts";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"
import Profile from './Profile';
import Register from './Register';
import Messages from './Messages';

// ask about merging branches and file collision, and package downloads, imports, etc
// ask about getting a box shadow on the searchbar
// Why isnt the react switch routing working on the header component?

const Secured = ({ storeloginUser, loginToken, postId, setPostId, message, setMessage, posts, setPosts, replyId, setReplyId, userPosts, setUserPosts, userMessages, setUserMessages }) => {
  return (
    <>
      <Header />
      <Route exact path='/home'>
        <Home storeloginUser={storeloginUser} />
      </Route>

      <Route exact path='/posts'>
        <Posts setPostId={setPostId} posts={posts} setPosts={setPosts} replyId={replyId} setReplyId={setReplyId} />
      </Route>

      <Route exact path='/profile'>
        <Profile loginToken={loginToken} storeloginUser={storeloginUser} userMessages={userMessages} setUserMessages={setUserMessages} setUserPosts={setUserPosts} userPosts={userPosts} />
      </Route>

      <Route exact path='/messages'>
        <Messages postId={postId} loginToken={loginToken} setPostId={setPostId} message={message} setMessage={setMessage} />
      </Route>


    </>
  )
}

function App() {

  /* I'd argue this is necessary */
  const [loginToken, setloginToken] = useState("");

  /* I'd argue this could be necessary but isn't necessarily */
  const [storeloginUser, setstoreloginUser] = useState("");


  /* I'd consider taking a look at this and see if this can be moved into their 
    respective components */
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerToken, setregisterToken] = useState("");
  const [storeloginPass, setstoreloginPass] = useState("");
  const [postId, setPostId] = useState("")
  const [message, setMessage] = useState("")
  const [posts, setPosts] = useState([]);
  const [replyId, setReplyId] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);


  return (
    <Router>
      <div className="App">
        {/* the login component reroutes to profile (messages) */}


        <Switch>

          <Route exact path='/'>
            <Login registerToken={registerToken} username={username} password={password}
              setregisterToken={setregisterToken} loginToken={loginToken} setloginToken={setloginToken}
              storeloginUser={storeloginUser} setstoreloginUser={setstoreloginUser}
              storeloginPass={storeloginPass} setstoreloginPass={setstoreloginPass}
            />
          </Route>

          <Route exact path='/register'>
            <Register
              username={username} password={password} setUsername={setUsername}
              setPassword={setPassword} setregisterToken={setregisterToken} registerToken={registerToken}
            />
          </Route>
          <Secured storeloginUser={storeloginUser} loginToken={loginToken} postId={postId} setPostId={setPostId} message={message} setMessage={setMessage} posts={posts} setPosts={setPosts}
            replyId={replyId} setReplyId={setReplyId} userMessages={userMessages} setUserMessages={setUserMessages} setUserPosts={setUserPosts} userPosts={userPosts} />
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