import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './aboutus/Aboutus.js';
import Getintouch from './getinTouch/Getintouch';
import Header from './Header/Header.js';
function App() {
  return (
<Router>
    <Routes>
        <Route path='/' element={
          <Header />
        } />
        <Route path="/getintouch" element={
          <Getintouch/>
        } />
        <Route path="/aboutus" element={
          <Aboutus />
        } /> 
    </Routes>
</Router>
  );
}

export default App;
