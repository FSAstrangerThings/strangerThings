import './App.css';
import Api from './Api/index.js';
import Register from './Api/Register.js';
import { useState } from 'react';
import Login from './Api/Login.js';

function App() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerToken, setregisterToken] = useState("");
  const [loginToken, setloginToken] = useState("")

  return (
    <div className="App">
      <Api username={username} password={password} />
      <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} setregisterToken={setregisterToken} registerToken={registerToken} />
      <Login registerToken={registerToken} username={username} password={password} setregisterToken={setregisterToken} />
    </div >

  );
}

export default App;
