import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import InfoModal from "./components/InfoModal";
import NotFoundModal from "./components/NotFoundModal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const records = [71, 82, 100, 9];

  const [isMatch, setIsMatch] = useState(false);
  const [currentWindow, setCurrentWindow] = useState("");



  const setCurrentWindowHandler = (window) => {
    setCurrentWindow(window);
  };

  const setIsMatchHandler = (enteredID) => {
    if (records.includes(enteredID)) {
      setIsMatch(true);
      setCurrentWindowHandler(
        <InfoModal openWindow={setCurrentWindowHandler} />
      );
    } else if (!isMatch) {
      setCurrentWindowHandler(
        <NotFoundModal closeWindow={setCurrentWindowHandler} />
      );
    }

    setIsMatch(false);
  };


  
  return (
    <div>
      <Page checkRecords={setIsMatchHandler} />
      {currentWindow}
    </div>
  );
}

export default App;
