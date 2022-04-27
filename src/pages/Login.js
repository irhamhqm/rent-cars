
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = '123213sadsad'; //ambil dari localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', {
      email,
      password
    },
    {
      headers: {
        // 'access_token': token,
        // 'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    }).then((response) => {
      const token = response.data.data.token;
      const storage = window.localStorage;
      storage.setItem('token', token);
    }).catch((error) => {

    });
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  )
}