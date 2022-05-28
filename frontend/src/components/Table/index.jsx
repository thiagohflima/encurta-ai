import { useState } from 'react';
import { EachItem } from '../EachItem';

export const Table = ({ setLoggedIn }) => {
  const handleLogoutClick = () => {
    setTimeout(() => setLoggedIn(false), 1000);
  };

  const [listOfLinks, setListOfLinks] = useState({});

  const handleAddClick = () => {};

  return (
    <>
      <div className='logout'>
        <input type='button' value='Logout' onClick={handleLogoutClick} />
      </div>

      <div className='box table'>
        <div className='title'>
          <h2>List of Links</h2>
          <button className='btn-crud add' onClick={handleAddClick}>
            ADD
          </button>
        </div>

        <EachItem />
      </div>
    </>
  );
};
