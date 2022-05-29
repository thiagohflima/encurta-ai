import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../util/api';

export const Modal = ({
  title,
  type,
  closeModal,
  userId,
  linkLong,
  linkShort,
  updateTable,
  id,
}) => {
  const [twoLinks, setTwoLinks] = useState({ linkLong: '', linkShort: '' });

  useEffect(() => {
    setTwoLinks({
      linkLong: linkLong,
      linkShort: linkShort,
    });
  }, []);

  const handleSaveClickFromAdd = () => {
    console.log('add');

    axios
      .post(apiUrl + '/link/', {
        userId: userId,
        linkLong: twoLinks.linkLong,
        linkShort: twoLinks.linkShort,
      })
      .then(function (res) {
        // handle success
        console.log(res);
        updateTable();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    closeModal();
  };

  const handleSaveClickFromEdit = () => {
    console.log('edit');

    axios
      .put(apiUrl + '/link/' + id, {
        linkLong: twoLinks.linkLong,
        linkShort: twoLinks.linkShort,
      })
      .then(function (res) {
        // handle success
        console.log(res);
        updateTable();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    closeModal();
  };

  return (
    <div className='modal'>
      <div className='title'>{title}</div>
      <div className='content'>
        <div className='input-container'>
          <label htmlFor='link-long'>Link long</label>
          <input
            type='text'
            name='link-long'
            onChange={e => {
              setTwoLinks({ ...twoLinks, linkLong: e.target.value });
            }}
            value={twoLinks.linkLong}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='link-short'>Link short</label>
          <input
            type='text'
            name='link-short'
            onChange={e => {
              setTwoLinks({ ...twoLinks, linkShort: e.target.value });
            }}
            value={twoLinks.linkShort}
          />
        </div>
      </div>
      <div className='action'>
        <button
          type='submit'
          onClick={() => {
            type === 'add' && handleSaveClickFromAdd();
            type === 'edit' && handleSaveClickFromEdit();
          }}
          className='btn-crud ok'
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export const ModalDelete = ({ title, closeModal, updateTable, id }) => {
  const handleSaveClickFromDelete = () => {
    console.log('del');

    axios
      .delete(apiUrl + '/link/' + id)
      .then(function (res) {
        // handle success
        console.log(res);
        updateTable();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    closeModal();
  };

  return (
    <div className='modal'>
      <div className='title'>{title}</div>

      <div className='action'>
        <button
          className='btn-crud del'
          onClick={() => handleSaveClickFromDelete()}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};
