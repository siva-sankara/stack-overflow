import RoutesPage from "./RoutesPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllQuestios } from "./actions/Question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./actions/Users";
function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchAllQuestios());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  
  const [slideIn, setSlideIn] = useState(true);
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);
  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
  const handleTheme = () => {
      setTheme((state) => !state);
  };
  return ( 
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} theme={theme}  handleTheme={handleTheme} />
        <RoutesPage slideIn={slideIn} theme={theme} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
