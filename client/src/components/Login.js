import React, { useState } from "react";
import axios from 'axios'


const Login = (props) => {

  const [username, setUsername] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', username)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles');
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  const handleChange = e => {
    setUsername({...username, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' value={username.username} onChange={handleChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={username.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
