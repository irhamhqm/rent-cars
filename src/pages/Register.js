
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://notflixtv.herokuapp.com/api/v1/users', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: passwordConfirmation
    },
    {
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      const storage = window.localStorage;
      storage.setItem('token', response.data.data.token);
    }).catch((error) => {

    });
  }

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label>
          first name
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <br />
        <label>
          last name
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <br />
        <label>
          email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br />
        <label>
          password confirmation
          <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </label>
        <button type="submit">register</button>
      </form>
    </div>
  )
}