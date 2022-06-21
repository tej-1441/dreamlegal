import { React , useState } from 'react';
import './Form.css';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import fireDb from '../firebase';
import { toast } from 'react-toastify';

function Form() {

    const navigate=useNavigate();
    const [enteredName,setEnteredName]=useState('');
    const [enteredNameIsTouched,setEnteredNameIsTouched]=useState(false);
    
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredEmailIsTouched,setEnteredEmailIsTouched]=useState(false);
    
    const [enteredSubject,setEnteredSubject]=useState('');
    const [enteredSubjectIsTouched,setEnteredSubjectIsTouched]=useState(false);
    
    let isFormValid=false;
    
    const handleNameChange=(event)=>{
      setEnteredName(event.target.value);
      setEnteredNameIsTouched(true);   
      
    }
    const handleEmailChange=(event)=>{
      setEnteredEmail(event.target.value);
      setEnteredEmailIsTouched(true);
    }
    const handleSubjectChange = (event) =>{
      setEnteredSubject(event.target.value);
      setEnteredSubjectIsTouched(true);
      
    }
    
    const handleNameBlur = ()=>{
      setEnteredEmailIsTouched(true);
    }
    const handleEmailBlur = () =>{
      setEnteredEmailIsTouched(true);
    }
    const handleSubjectBlur = () =>{
      setEnteredSubjectIsTouched(true);
    }
    
    let isNameInCorrect=(enteredName.trim().length===0 ) || (!enteredNameIsTouched);
    let isEmailInCorrect=(enteredEmail.indexOf('@')===-1) || (!enteredEmailIsTouched);
    let isSubjectInCorrect=(enteredSubject.trim().length===0) || (!enteredSubjectIsTouched);
    // console.log(isNameInCorrect,isEmailInCorrect,isSubjectInCorrect);
    const [send,setSend]=useState(false);

    const onSubmitHandler=(event)=>{
      event.preventDefault();
      isFormValid=(!isNameInCorrect 
        && !isEmailInCorrect 
        && !isSubjectInCorrect);
      setEnteredEmailIsTouched(true);
      setEnteredNameIsTouched(true);
      setEnteredSubjectIsTouched(true);
      console.log(isFormValid);
      if(isFormValid===false)
      {
          return;
      }
      setSend(true);
      // console.log(isEmailInCorrect,isNameInCorrect,isSubjectInCorrect);
      const currstate={
        name:{enteredName},
        email:{enteredEmail},
        subject:{enteredSubject}
      }
      console.log("trying to send");
      setTimeout(()=>{
        fireDb.child('requestdemo').push(currstate,(err)=>{
          if(err)
          {
            console.log("notsended");
           toast.error(err);
          }
          else{
            console.log("sended");
            toast.success("successfully send");
          }
        });
        // navigate('/');
      },500)
      // setEnteredEmailIsTouched(false);
    }

  return (
    <div className='form'>
    <h2 className='form__header'>
        <pre style={{color:'#0dcaf0'}}>LEAVE </pre> A MESSAGE
    </h2>
    <div className='form__content'>
      <form action="/" onSubmit={onSubmitHandler}>
        <label className='name__label'>Your Name</label>
          <br />
        <input onChange={handleNameChange} 
           value={enteredName} 
           onBlur={handleNameBlur}
           className='name__input' 
           type="text" size={50} 
           placeholder='e.g Vishnu' 
         />
           {isNameInCorrect && enteredNameIsTouched && 
           <p className='error'>*This feild is neccessary</p>}
          <br />
        <label  className='email__label'>Your Email</label>
          <br />
        <input onChange={handleEmailChange}
          onBlur={handleEmailBlur}  
          value={enteredEmail} 
          className='email__input' 
          size={50} 
          placeholder='xyz@.gmail'
        />
        {isEmailInCorrect && enteredEmailIsTouched && 
        <p className='error'>*Is Either empty or Invalid</p>}
          <br />
        <label className='subject__label'> Subject</label>
          <br />
        <input 
           onChange={handleSubjectChange}
           onBlur={handleSubjectBlur} 
           value={enteredSubject} 
           className='subject__input' 
           type="text" 
           size={50} 
           />
         {isSubjectInCorrect && enteredSubjectIsTouched && 
         <p className='error'>*This feild is neccessary</p>}
          <br />
        <label className='message__label'>Message</label>
          <br />
        <textarea className='message__input' size={50} row={10} col={1000}></textarea>
          <br />
        <div className='submission__div'>
        <Button  variant="outline-dark" type="submit">submit</Button>
         {send && <p className='sending'>sending.....</p>}
        </div>
      </form>
    </div>
    </div>
  )
}

export default Form