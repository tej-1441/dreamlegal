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

function Home() {
  const navigate =useNavigate();
  const[searchItem,setSearchItem]=useState("");
  const handleSearchChange = (event) =>{
    setSearchItem(event.target.value);
  }
  const handleFormSubmit =(event)=>{
      event.preventDefault();
  } 
  const handleSearchClick=(event)=>{
    const val=event.target.name;
    console.log("val",val);
    navigate(`/${val}`)
  } 
  const handleClickSearch=(event)=>{
    console.log("val",searchItem);
    navigate(`/${searchItem}`);
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
       <h1 className='home__header'>Discover top business &<br />software service partner </h1>
      <Form onSubmit={handleFormSubmit} className="d-flex search__engine">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchItem}
            onChange={handleSearchChange}
          />
          <Button className='navbar__element search__button' onClick={handleClickSearch} variant="dark">Search</Button>
        </Form>
        <div className='searched__item'>
          {JSONDATA.teachers.filter((val)=>{
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
           <h1>Software</h1>
           <hr size="4" />
           <div>
            {JSONDATA.teachers.filter((val)=>{
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
          
              return <div className='searched__item__name' name={val.first_name} onClick={handleSearchClick}>{val.first_name}</div> 
          })}
          </div>
         </div>:""
        }

        {JSONDATA.friends.filter((val)=>{
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
            <h1>Services</h1>
            <hr size="4"/>
            <div>
            {JSONDATA.friends.filter((val)=>{
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
             return <div className='searched__item__name' name={val.first_name} onClick={handleSearchClick} >{val.first_name}</div> 
          })}
          </div>
         </div>:""
        }
        </div>
       </div>
       <div right className='home__logo'>
          {/* <HomeSvg1 /> */}
       </div>
      
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