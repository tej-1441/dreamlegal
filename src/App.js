import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './aboutus/Aboutus.js';
import Getintouch from './requestdemo/RequestDemo';
import Header from './Header/Header.js';
import OurInsight from './ReaderCorner/OurInsight';
import Footer from './Footer/Footer.js';
// import Header1 from './Header1/Header1';
import Home from './Home/Home.js';
import Catergories from './categories/Catergories';
import Login from './Header/Login/Login.js';
import {auth} from './firebase';
import {AuthenticationAction} from './store/index.js';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Requested from './requestedDemo/Requested';

function App() {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user);
    useEffect(()=>{
      auth.onAuthStateChanged((authuser)=>{
        if(authuser){
          console.log(authuser.email);
          dispatch(AuthenticationAction.setuser(authuser.email));
        }
        else
        {
          dispatch(AuthenticationAction.setuser(null));
        }
      })
    },[])



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
        <Route path="/categories" element={
          <>
          <Header />
          <Catergories />
          <Footer />
          </>
        } />
        <Route path="/readerscorner" element={
          <>
          <Header />
          <OurInsight/>
          <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
          <Header />
          <Login/>
          <Footer />
          </>
        } />
          <Route path="/morereview" element={
          <>
             <Header />
          </>
          } />
          <Route path="/requested" element={  
            <Requested />
          }/>
         

    </Routes>
</Router>
  );
}

export default App;
