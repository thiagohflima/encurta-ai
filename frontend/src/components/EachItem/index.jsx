import { useState } from 'react';
import Popup from 'reactjs-popup';
import { Modal, ModalDelete } from '../Modal';

export const EachItem = ({ id, linkLong, linkShort, updateTable }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const closeModalEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = useState(false);
  const closeModalDelete = () => setOpenDelete(false);

  return (
    <div className='content'>
      <a href={linkLong} className='link-long'>
        {linkLong}
      </a>
      <a href={linkShort} className='link-short'>
        {linkShort}
      </a>
      <div className='actions'>
        <button className='btn-crud edit' onClick={() => setOpenEdit(o => !o)}>
          EDIT
        </button>
        <Popup open={openEdit} onClose={closeModalEdit} modal>
          <Modal
            title='Edit a Link'
            type='edit'
            id={id}
            linkLong={linkLong}
            linkShort={linkShort}
            closeModal={closeModalEdit}
            updateTable={updateTable}
          />
        </Popup>
        <button className='btn-crud del' onClick={() => setOpenDelete(o => !o)}>
          DEL
        </button>
        <Popup open={openDelete} onClose={closeModalDelete} modal>
          <ModalDelete
            title='Are you sure?'
            type='del'
            id={id}
            closeModal={closeModalDelete}
            updateTable={updateTable}
          />
        </Popup>
      </div>
    </div>
  );
};
