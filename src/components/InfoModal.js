import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./InfoModal.module.css"
import {useState} from "react"

const CHARACTER_LIMIT = 2000;

const Info_Modal = (props) => {
  
const handleClose = () => props.openWindow(false);
  
const [wordCount, setWordCount] = useState(CHARACTER_LIMIT)
const [enteredChars, setEnteredChars] = useState("")


  const onChangeHandler = (event) => {

    let currentChars = event.target.value.length; 

    

    if (currentChars <= CHARACTER_LIMIT) {
        
        
        setWordCount(CHARACTER_LIMIT - currentChars);
        setEnteredChars(event.target.value)

       

    }

    


  }



  return (
    <div>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header className={styles.header} closeButton>
          <Modal.Title>ID Found</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={onChangeHandler} as="textarea" value={enteredChars} rows={3}></Form.Control>
              <p className={styles.p}> {wordCount} Words remaining</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Info_Modal;
