import { useEffect, useState } from 'react';
import { Background } from './components/Background';
import { Login } from './components/Login';
import { Table } from './components/Table';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    !loggedIn && setUserId(0);
  }, [loggedIn]);

  return (
    <>
      <Background />

      <div className='header'>
        Encurt<span>Aí</span>
      </div>

      {!loggedIn && <Login setLoggedIn={setLoggedIn} setUserId={setUserId} />}
      {loggedIn && <Table setLoggedIn={setLoggedIn} userId={userId} />}

      <div>UserId: {userId}</div>
      <div>loggedIn: {loggedIn ? 'True' : 'False'}</div>

      <div className='footer'>
        <span>Developed by:</span> Thiago H F Lima
      </div>
    </>
  );
}
