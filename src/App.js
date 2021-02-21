import './App.css';
import Register from './Register.js';
import { useState } from 'react';
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerToken, setregisterToken] = useState("");
  const [loginToken, setloginToken] = useState("")

  return (
    // <Router>
    <div className="App">

      {/* <Switch>
          <Route exact path="/register"> */}
      <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} setregisterToken={setregisterToken} registerToken={registerToken} />
      {/* </Route> */}


      {/* <Route exact path="/"> */}
      <Login registerToken={registerToken} username={username} password={password} setregisterToken={setregisterToken} loginToken={loginToken} setloginToken={setloginToken} />
      {/* </Route> */}
      {/* </Switch> */}
    </div >
    // </Router>

  );
}

export default App;
