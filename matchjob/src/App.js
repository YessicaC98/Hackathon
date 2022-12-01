import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Home from './components/home/Home';
import NotFound from './components/NotFound/NotFound';
import Details from './components/details/Details';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SingUp" element={<SingUp/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
