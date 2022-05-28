import { useState } from 'react';
import { Background } from './Background';
import { Login } from './components/Login';
import { Table } from './components/Table';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Background />
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <Table setLoggedIn={setLoggedIn} />}
    </>
  );
}
