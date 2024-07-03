import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function BackgroundModalError(props) {
  const {setIsLoading,isLoading,error,setError} = props;

  const resetStatus=()=>{
    setError(null);
    setIsLoading(false);
  };

  return (
    <>
      <Modal
        show= {isLoading}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>{error}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          換換其他 URL 的試試看吧!
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={resetStatus}>確認</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BackgroundModalError; 