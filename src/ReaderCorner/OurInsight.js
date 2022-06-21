import React from 'react'
import ReadersCornerComponent from './ReadersCornerComponent'
import './OurInsight.css';

function OurInsight() {
  return (
    <div className='ourinsight'>
    <div className='ourinsight__row'>
     <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/ee.jpg"
         title="ELECTRONIC EVIDENCE: ADMISSIBILITY & CHALLENGES"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/GetPaidStock.com-619ba8cc40a28_640x479.jpg"
         title="THE OBC BILL, 2021"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/12/ranjan-1.jpg"
         title="SECTION 9 & JURISDICTION OF CIVIL COURTS"
       />
    </div>
    <div className='ourinsight__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/GetPaidStock.com-61951d88d23a3_640x479.jpg"
         title="RIGHT TO FOOD- HOW FAR WE ARE?"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/nov-13.jpg"
         title="CUSTODIAL TORTURE: A SERIES OF EVENTS"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/GetPaidStock.com-618d1232859f2_640x479.jpg"
         title="RESERVATION FOR SCHEDULED CASTE CONVERTS: WHAT DOES THE LAW SAY?"
       />
    </div>
    <div className='ourinsight__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/GetPaidStock.com-61893669c90ba_640x479.jpg"
         title="JUVENILE CRIME IN INDIA: SAVING YOUTH AND FUTURE"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/11/Aadhar_640x479.jpg"
         title="UIDAI’S EXEMPTION FROM PERSONAL DATA PROTECTION LAWS"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/10/water-dispute.jpg"
         title="INTRICACIES OF THE INTER-STATE WATER DISPUTE ACT, 1956"
       />
    </div>
    <div className='ourinsight__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/10/hgjhg.jpg"
         title="ONLINE GAMING: LEGAL AND SOCIAL IMPLICATIONS"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/10/GetPaidStock.com-617037f73748b_640x479.jpg"
         title="CORRECTIVE RAPE: NEVER A SOLUTION"
       />
    </div>

   </div>
   
  )
}

export default OurInsight