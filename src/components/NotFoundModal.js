import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./NotFoundModal.module.css"

const NotFoundModal = (props) => {
  const handleClose = () => props.closeWindow(<></>);

  return (
    <div>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header className={styles.header} closeButton>
          <Modal.Title>No ID Found</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>No results were found for the entered ID.</Form.Label>
            
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotFoundModal;