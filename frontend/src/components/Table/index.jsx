import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { apiUrl } from '../../util/api';
import { EachItem } from '../EachItem';
import { Modal } from '../Modal';

export const Table = ({ setLoggedIn, userId }) => {
  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  const [listOfLinks, setListOfLinks] = useState([]);

  const updateTable = () => {
    axios
      .get(apiUrl + '/link/' + userId)
      .then(function (res) {
        // handle success
        console.log(res);
        setListOfLinks(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    updateTable();
  }, []);

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
            <Modal
              title='Add a New Link'
              type='add'
              closeModal={closeModal}
              userId={userId}
              updateTable={updateTable}
            />
          </Popup>
        </div>

        <div className='head'>
          <h4>
            Link Long <span>▼</span>
          </h4>
          <h4>
            Link Short <span>▼</span>
          </h4>
          <div className='invisible-btn actions'>
            <button className='btn-crud edit'></button>
            <button className='btn-crud edit'></button>
          </div>
        </div>

        {listOfLinks.map(({ id, linkLong, linkShort }) => {
          return (
            <EachItem
              key={id}
              id={id}
              linkLong={linkLong}
              linkShort={linkShort}
              updateTable={updateTable}
            />
          );
        })}
      </div>
    </>
  );
};
