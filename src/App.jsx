import { useState } from 'react';
import './index.css';
import Button from './components/Button';
import Modal from './components/Modal';
import Main from './components/Main';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function handleButtonClick() {
    alert('Ok1');
    setIsModalOpen(false);
  }

  return (
    <Main>
      <Button
        setIsModalOpen={setIsModalOpen}
        onClick={() => openModal()}
        className='button'
      >
        Open Modal
      </Button>

      <Modal
        title='Confirm action'
        content='Are you sure you want to continue??'
        showCloseButton={true}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      >
        <Button className='closeButton' onClick={() => closeModal()}>
          &times;
        </Button>

        <Button
          onClick={() => closeModal()}
          className='secondaryButton'
          closeModal={closeModal}
        >
          Cancel
        </Button>

        <Button
          className='primaryButton'
          onClick={() => {
            handleButtonClick();
            closeModal();
          }}
        >
          Yes, continue
        </Button>
      </Modal>
    </Main>
  );
}

export default App;
