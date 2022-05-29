import { useState } from 'react';
import { apiUrl } from '../../util/api';
import axios from 'axios';

export const Login = ({ setLoggedIn, setUserId }) => {
  const [input, setInput] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState(false);

  const handleLoginClick = () => {
    axios
      .post(apiUrl + '/user', {
        username: input.username,
        password: input.password,
      })
      .then(function (res) {
        // handle success
        console.log(res);

        setLoginError(false);

        setLoggedIn(true);

        setUserId(res.data.id);
      })
      .catch(function (error) {
        // handle error
        console.log(error);

        setLoginError(true);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className='box login'>
      <div className={`input-container ${loginError && 'error'}`}>
        <input
          type='text'
          name='uname'
          placeholder='Username'
          required
          onChange={e => setInput({ ...input, username: e.target.value })}
        />
      </div>
      <div className={`input-container ${loginError && 'error'}`}>
        <input
          type='password'
          name='pass'
          placeholder='Password'
          required
          onChange={e => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <div className='button-container'>
        <input type='button' value='Login' onClick={handleLoginClick} />
      </div>
    </div>
  );
};
