
import React, {useState} from 'react';
import useSecurity from "./useSecurity";

const Login = () => {
    const {login} = useSecurity();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return <div>
        <h1>LogIn page</h1>
        <p>You need to login here. (hint: try promise/password)</p>
        <label htmlFor="username">username:</label>
        <input 
        type="text" 
        id='username' 
        name='username'
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id='password' 
        name='password' 
        value={password} 
        onChange={(evt) => setPassword(evt.target.value)}
        />
        <br />
        <button onClick={() => login(username, password)}>Login</button>
    </div>;
};

export default Login;


