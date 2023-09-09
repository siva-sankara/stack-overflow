import RoutesPage from "./RoutesPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { fetchAllQuestios } from "./actions/Question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./actions/Users";
function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchAllQuestios());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  
  return ( 
    <div className="App">
      <Router>
        <Navbar />
        <RoutesPage />
      </Router>
    </div>
  );
}

export default App;
