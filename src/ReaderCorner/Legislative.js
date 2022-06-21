import React from 'react'
import ReadersCornerComponent from './ReadersCornerComponent'
import './Legislative.css'; 

function Legislative() {
  return (
    <div className='legislative'>
    <div className='legislative__row'>
     <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2022/05/GetPaidStock.com-62935cec67426_640x479.jpg"
         title="CRIMINAL PROCEDURE IDENTIFICATION BILL, 2022"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/12/GetPaidStock.com-61b2181756ac2_640x479.webp"
         title="DRONE RULES, 2021 AND THE RIGHT TO PRIVACY"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/tribunal.jpg"
         title="THE TRIBUNALS REFORMS ACT, 2021: TUSSLE BETWEEN THE CENTRE AND THE SUPREME COURT"
       />
    </div>
    <div className='legislative__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/106.jpg"
         title="ANALYSIS OF THE NEW IT (INTERMEDIARY GUIDELINES AND DIGITAL MEDIA ETHICS CODE) RULES, 2021."
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/transgender-law.jpg"
         title="AN ANALYSIS OF TRANSGENDER PERSONS (PROTECTION OF RIGHTS) ACT, 2019."
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/08/cooperative.jpg"
         title="97TH CONSTITUTIONAL AMENDMENT: DECLARED UNCONSTITUTIONAL BY SUPREME COURT"
       />
    </div>
    <div className='legislative__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/08/GetPaidStock.com-610f9d433ec0b_640x479.jpg"
         title="INSOLVENCY AND BANKRUPTCY CODE, 2016"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/07/ecaacca763c_1_640x479.jpg"
         title="ADVOCATES PROTECTION BILL (2021): DOES THREAT MANDATORILY COMES WITH RESPONSIBILITY?"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/transgender-law.jpg"
         title="AN ANALYSIS OF TRANSGENDER PERSONS (PROTECTION OF RIGHTS) ACT, 2019."
       />
    </div>
   </div>

  )
}

export default Legislative