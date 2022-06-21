import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './aboutus/Aboutus.js';
import Getintouch from './getinTouch/Getintouch';
import Header from './Header/Header.js';
import OurInsight from './ReaderCorner/OurInsight';
import Articles from './ReaderCorner/Articles';
import ResearchPaper from './ReaderCorner/ResearchPaper';
import Legislative from './ReaderCorner/Legislative';
import Footer from './Footer/Footer.js';
// import Header1 from './Header1/Header1';
import Home from './Home/Home.js'

function App() {
  return (
<Router>
    <Routes>
        <Route path='/' element={
          <>
           <Header />
           <Home />
           <Footer />
          </>
         
        } />
        <Route path="/getintouch" element={
          <>
          <Header />
          <Getintouch/>
          </>

        } />
        <Route path="/aboutus" element={
          <>
          <Header />
          <Aboutus />
          <Footer />
          </>
        } /> 
        <Route path="/insight" element={
          <>
          <Header />
          <OurInsight/>
          <Footer />
          </>
        } />
        <Route path="/articles" element={
          <>
          <Header />
          <Articles />
          <Footer />
          </>

        } /> 
        <Route path="/researchpaper" element={
          <>
          <Header />
          <ResearchPaper/>
          <Footer />
          </>
        } />
        <Route path="/legislative" element={
          <>
          <Header />
          <Legislative />
          <Footer />
          </>
        } /> 
    </Routes>
</Router>
  );
}

export default App;
