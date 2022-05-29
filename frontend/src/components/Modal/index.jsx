import { useState } from 'react';

export const Modal = ({ title, type, closeModal }) => {
  const [twoLinks, setTwoLinks] = useState({ linkLong: '', linkShort: '' });

  const handleSaveClickFromAdd = () => {
    console.log('add');
    closeModal();
  };

  const handleSaveClickFromEdit = () => {
    console.log('edit');
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

export const ModalDelete = ({ title, closeModal }) => {
  const handleSaveClickFromDelete = () => {
    console.log('del');
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
