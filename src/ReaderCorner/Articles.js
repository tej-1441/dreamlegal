import React from 'react'
import ReadersCornerComponent from './ReadersCornerComponent'
import './Articles.css';
function Articles() {
  return (
    <div className='articles'>
     <div className='articles__row'>
      <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/consideration.jpg"
          title="PLEDGE & BAILMENT: INDIAN CONTRACT ACT"
        />
        <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/GetPaidStock.com-61e56ff59ce56_640x479-1.jpg"
          title="THE DAM SAFETY BILL, 2019"
        />
        <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/GetPaidStock.com-61dee738dac30_640x479.jpg"
          title="THE MEDIATION BILL, 2021: HOW IT IMPACTS DISPUTE RESOLUTION IN INDIA"
        />
     </div>
     <div className='articles__row'>
     <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/pepsico.jpg"
          title="PEPSICO VS FARMERS CASE: THE POTATO VARIETY PATENT CASE."
        />
        <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/GetPaidStock.com-61d8311019f81_1_640x479.jpg"
          title="THE JAGANNATH TEMPLE ACT: AMENDMENT AND CONSEQUENCES"
        />
        <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2022/01/GetPaidStock.com-61d407583521f_640x479.jpg"
          title="THE ELECTION AMENDMENT BILL, 2021: CHANGES AND CHALLENGES"
        />
     </div>
     <div className='articles__row'>
     <ReadersCornerComponent
          img="https://dreamlegal.in/wp-content/uploads/2021/12/real-estate.webp"
          title="REAL ESTATE LAWS IN INDIA: RERA & OTHER LEGISLATIONS."
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

export default Articles