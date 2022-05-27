import './App.css'
import Page from "./components/Page"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const records =[71, 82, 100, 93]

  return (
     <Page records={records}/>
  );
}

export default App;
