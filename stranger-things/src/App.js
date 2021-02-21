import React from 'react'
import Header from "./Header"
import './App.css';
import Posts from "./Posts";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"
import Profile from './Profile';
import Register from './Register';

// ask about merging branches and file collision, and package downloads, imports, etc
// ask about getting a box shadow on the searchbar
// Why isnt the react switch routing working on the header component?

function App() {

  return (
    <Router>
      <div className="App">
      {/* the login component reroutes to profile (messages) */}
      
      {/* home welcome to strangers things logged in as "" button view profile  routes to profile after login */}
      
        <Switch>
          <Route exact path ='/'>
            <Login />
          </Route>

          <Route exact path ='/register'>
            <Register />
          </Route>

          <Route exact path ='/home'>
            <Header />
            <Home />
          </Route>
          
          <Route exact path ='/posts'>
            <Header />
            <Posts />
          </Route>

          
          <Route exact path ='/profile'>
            <Profile />
          </Route>

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
