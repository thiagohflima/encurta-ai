import { useState } from 'react';
import Popup from 'reactjs-popup';
import { EachItem } from '../EachItem';
import { Modal } from '../Modal';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
};

export const Table = ({ setLoggedIn }) => {
  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  const [listOfLinks, setListOfLinks] = useState({});

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className='logout'>
        <input type='button' value='Logout' onClick={handleLogoutClick} />
      </div>

      <div className='box table'>
        <div className='title'>
          <h2>List of Links</h2>
          <button className='btn-crud add' onClick={() => setOpen(o => !o)}>
            ADD
          </button>
          <Popup open={open} onClose={closeModal} modal>
            <Modal title='Add a New Link' type='add' closeModal={closeModal} />
          </Popup>
        </div>

        <EachItem id='1' linkLong='DSOASDsiDJSADasdjoASD' linkShort='sadJIDS' />
      </div>
    </>
  );
};
