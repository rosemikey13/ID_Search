import React from "react";
import styles from "./SearchBar.module.css";
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {
    return(
        <div>
        <input className={styles.SearchBar__text} type="text"></input>
        <Button className={styles.SearchBar__button}>Submit</Button>
        </div>
    )
}

export default SearchBar
