import {useState} from "react";
import styles from "./SearchBar.module.css";
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {

   const [enteredID, setEnteredID] = useState("")

  const setEnteredIDHandler = (event) => {

    setEnteredID(event.target.value)
    

  }
    
const checkRecords = () => {

        props.checkRecords(parseInt(enteredID))

    }

    return(
        <div>
        <input onChange={setEnteredIDHandler} className={styles.SearchBar__text} type="text"></input>
        <Button onClick={checkRecords} className={styles.SearchBar__button}>Search</Button>
        </div>
    )
}

export default SearchBar
