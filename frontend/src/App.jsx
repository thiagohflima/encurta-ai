import { useState } from 'react';
import { Background } from './components/Background';
import { Login } from './components/Login';
import { Table } from './components/Table';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Background />

      <div className='header'>
        Encurt<span>Aí</span>
      </div>

      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <Table setLoggedIn={setLoggedIn} />}

      <div className='footer'>
        <span>Developed by:</span> Thiago H F Lima
      </div>
    </>
  );
}
