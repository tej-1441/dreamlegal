import React from 'react'
import Component from './Component';
import './Common.css';
import {Row,Col} from 'react-bootstrap';

function ExpenseManagement() {
  return (
    <div className='includes__all'>
    <Row className='includes__sub'>
      <Col>
       <Component className="component" name="SapConcur" number={5329} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/9c4e7f650e55a8ffd40cda754c1799a8/sap-concur.png" />
      </Col>
      <Col>
       <Component className="component" name="TripActions" number={2356} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/862d8691ccbaab3a96aeea58bbc1c857/tripactions.png" />
      </Col>
      <Col>
       <Component className="component" name="Brex" number={3556} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/66b6146457722fe6c2676fd6e5a19df3/brex.png"/>
      </Col>
     </Row>

     <Row className='includes__sub'>
       <Col>
        <Component className="component" name="AirBase" number={5693} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/b79c37f91c703cc4633c8eb0b0bdb91c/airbase.png" />
       </Col>
       <Col>
         <Component className="component" name="zoho Expense" number={1300} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/7e7cace573d0661158fac2ceec97e7cf/zoho-expense.png" /> 
       </Col>
       <Col>
        <Component className="component" name="Expensify" number={4300} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/e64d6f0dc5a381c6db52480fba403e39/expensify.png" />
       </Col>
      </Row>

      <Row className='includes__sub'>
       <Col>
        <Component className="component" name="Pleo" number={2495} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/9ec513f0f568092db372ad45f075653d/pleo.jpg" />
       </Col>
       <Col>
        <Component className="component" name="Ramp" number={2560} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/234c556df129304a80833715d476c88d/ramp-financial-ramp.png" />
       </Col>
       <Col>
        <Component className="component" name="Emberse Certify Expense" number={5300} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/78bce3b220cf65eb812358a0ccedc6c5/emburse-certify-expense.png" />   
       </Col>
    </Row>
 </div>
  )
}

export default ExpenseManagement