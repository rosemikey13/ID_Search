import React from "react"
import styles from "./Page.module.css"
import SearchBar from "./SearchBar"

const Page = (props) => {

    return(

        <div className={styles.page__main}>
            <p>WHO WE DELETIN' ?</p>
            <SearchBar/>
        </div>
        

    )

    

}

export default Page