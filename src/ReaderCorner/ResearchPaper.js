import React from 'react'
import ReadersCornerComponent from './ReadersCornerComponent'
import './ResearchPaper.css';

function ResearchPaper() {
  return (
    <div className='researchpaper'>
    <div className='researchpaper__row'>
     <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/10/119.jpg"
         title="ROLE AND EFFECT OF CENTRAL AND STATE GOVERNMENT SCHEMES IN THE WELFARE OF TRIBAL COMMUNITIES OF INDIA."
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/cyber-posrnography.jpg"
         title="CYBER PORNOGRAPHY IN INDIA: AN ANALYSIS"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/09/Gender-neutral-laws.jpg"
         title="GENDER NEUTRALITY AND SEXUAL HARASSMENT LAWS IN INDIA: A SOCIETAL ISSUE"
       />
    </div>
    <div className='researchpaper__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/08/GetPaidStock.com-612a21d0b2eea_640x479.jpg"
         title="UNITED KINGDOM CORPORATE GOVERNANCE CODE: ACHIEVEMENTS AND CRITICISMS"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/08/GetPaidStock.com-611a99d13bddf_640x479.jpg"
         title="A REGULATORY BODY IN THE FIELD OF ARBITRATION:A BOON OR BANE"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2022/01/GetPaidStock.com-61d407583521f_640x479.jpg"
         title="THE ELECTION AMENDMENT BILL, 2021: CHANGES AND CHALLENGES"
       />
    </div>
    <div className='researchpaper__row'>
    <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/08/GetPaidStock.com-610f9418d947f_640x479.jpg"
         title="SHIFTING PARADIGM OF COMPUTER PROGRAM PATENTING: CRITICAL EVALUATION"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/12/GetPaidStock.com-61c325b2e16af_640x479.webp"
         title="AADHAAR TO BE LINKED WITH VOTER ID: APPROVAL AND CONSEQUENCES"
       />
       <ReadersCornerComponent
         img="https://dreamlegal.in/wp-content/uploads/2021/12/Legal-Age-of-marriage.webp"
         title="LEGAL AGE OF MARRIAGE: RECENT DEVELOPMENTS AND JAYA JAITLY COMMITTEE REPORT"
       />
    </div>
   </div>
  )
}

export default ResearchPaper