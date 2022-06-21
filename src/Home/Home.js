import React from 'react'
import './Home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import JSONDATA from './Mockdata';
import {useNavigate } from 'react-router-dom';
import ProjectManagement from './Second/ProjectManagement';
import MarketingAutomation from './Second/MarketingAutomation';
import EcommercePlatform from './Second/EcommercePlatform';
import Crm from './Second/Crm';
import Accounting from './Second/Accounting';
import ExpenseManagement from './Second/ExpenseManagement';
import Videoconfrencing from './Second/Videoconfrencing';
import Third from './Third/Third.js';
import Fourth from './Fourth/Fourth.js';
import Fifth from './Fifth/Fifth';
import HomeSvg1 from './HomeSvg1';
import Fade from 'react-reveal/Fade';

function Home() {
  const navigate =useNavigate();
  const[searchItem,setSearchItem]=useState("");
  const handleSearchChange = (event) =>{
    setSearchItem(event.target.value);
  }
  const handleFormSubmit =(event)=>{
      event.preventDefault();
  } 
  const handleSearchClick=()=>{
    navigate('/')
  } 
  const [categories,setCategories]=useState({first:true,
     second:false,
     third:false,
     fourth:false,
     fifth:false,
     sixth:false,
     seventh:false
})

function allFalse(event){
  event.preventDefault();
  setCategories({
    first:false,
    second:false,
    third:false,
    fourth:false,
    fifth:false,
    sixth:false,
    seventh:false
  })
  // switch(event.target.name){
  //   case "first":
  //     setCategories(!categories.first)
  //     break;
  //   case "second":
  //     setCategories(!categories.second);
  //     break;
  //     case "third":
  //       setCategories(!categories.third);
  //       break;
  //     case "fourth":
  //       setCategories(!categories.fourth);
  //       break;
  //       case "fifth":
  //         setCategories(!categories.fifth)
  //         break;
  //       case "sixth":
  //         setCategories(!categories.sixth);
  //         break;
  //         case "seventh":
  //           setCategories(!categories.seventh);
  //           break;
  //     default:
  // }
  // console.log(categories.first);


  const name=event.target.name;
  setCategories((prevValues)=>{
    return {
      ...prevValues,
      [name]: true
    }
  })

}

  return (
    <div className='home'>
      <div className='home__first'>
       <div className='home__content'>
       <h1 className='home__header'>Discover top Business <br/>And Software
      Service partner</h1>
      <Form onSubmit={handleFormSubmit} className="d-flex search__engine">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchItem}
            onChange={handleSearchChange}
          />
          <Button className='navbar__element' variant="dark">Search</Button>
        </Form>
        <div className='searched__item'>
          {JSONDATA.teacher.filter((val)=>{
          if(searchItem==="")
          {
            return "";
          }
          else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase()))
          {
            return(val);
          }
          else
          return "";
        }).length?
          <div className='teacher'>
           <h1>Teacher</h1>
           <hr size="4" />
           <div>
            {JSONDATA.teacher.filter((val)=>{
            if(searchItem==="")
            {
              return "";
            }
            else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase()))
            {
              return(val);
            }
            else
            return "";
            
          }).map((val,key)=>{
            if(key<=3)
            {
              return <div onClick={handleSearchClick}>{val.first_name}</div> 
            } 
            else
            return "";
          })}
          </div>
         </div>:""
        }

        {JSONDATA.friend.filter((val)=>{
          if(searchItem==="")
          {
            return "";
          }
          else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase()))
          {
            return(val);
          }
          else
          return "";
        }).length?
          <div className='friend'>
            <h1>Friends</h1>
            <hr size="4"/>
            <div>
            {JSONDATA.friend.filter((val)=>{
            if(searchItem==="")
            {
              return "";
            }
            else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase()))
            {
              return(val);
            }
            else
            return "";
            
          }).map((val,key)=>{
            if(key<=3)
            {
              return <div onClick={handleSearchClick} >{val.first_name}</div> 
            } 
            else
            return "";
          })}
          </div>
         </div>:""
        }
        </div>
       </div>
       <Fade right className='home__logo'>
          <HomeSvg1 />
       </Fade>
      
      </div>

      <div className='home__second'>
        <div className='home__second__left'>
          <h1>Most Popular Software categories</h1>
          <div className='home__second__left__software'>
              <button name="first" onClick={allFalse} className={`software ${categories.first && 'selected'}`}>Project Mangement</button>
              <button name="second" onClick={allFalse} className={`software ${categories.second && 'selected'}`}>video Confrencing</button>
              <button name="third" onClick={allFalse}  className={`software ${categories.third && 'selected'}`}>E-Commerce platform</button>
              <button name= "fourth" onClick={allFalse} className={`software ${categories.fourth && 'selected'}`}>Marketing Automation</button>
              <button name="fifth" onClick={allFalse} className={`software ${categories.fifth && 'selected'}`}>Accounting</button>
              <button name="sixth" onClick={allFalse} className={`software ${categories.sixth && 'selected'}`}>CRM</button>
              <button name="seventh" onClick={allFalse} className={`software ${categories.seventh && 'selected'}`}>Expense Management</button>
          </div>
        </div>
          <div className='home__second__right'>

              {categories.first && <ProjectManagement />}
              {categories.second && <Videoconfrencing />}
              {categories.third && <EcommercePlatform />}
              {categories.fourth && <MarketingAutomation />}
              {categories.fifth && <Accounting />}
              {categories.sixth && <Crm />}
              {categories.seventh && <ExpenseManagement />}

          </div>
      </div>
  
      <Third />
      <Fourth />
      <Fifth />

    </div>
  )
}

export default Home