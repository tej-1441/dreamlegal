import React from 'react'
import Component from './Component';
import './Common.css';
import {Row,Col} from "react-bootstrap";
function Accounting() {
  return (
    <div className='includes__all'>
       <Row className='includes__sub'>
         <Col>
          <Component className="component" name="NetSuite" number={3000} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/3104fdadb8b5803d363d935ea3b8ae1f/netsuite-2020-02-04.png" />
         </Col>
         <Col>
          <Component className="component" name="QuickBooks Online" number={2600} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/6b0135578182be9b7a3554a808a64d72/quickbooks-online.png" />
         </Col>
         <Col>
           <Component className="component" name="QuickBooks Desktop Pro"number={2300} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/886c6362df2546780d72afd6d2eed4d9/quickbooks-desktop-pro.png"/>
         </Col>
        </Row>

        <Row className='includes__sub'>
        <Col>
         <Component className="component" name="Sage Intacct" number={3400} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/14f9ce34aa0bb0f679b3f8e617a83f09/sage-intacct.jpg" />
        </Col>
        <Col>
         <Component className="component" name="QuickBook Desktop Version" number={2400} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/886c6362df2546780d72afd6d2eed4d9/quickbooks-desktop-pro.png" /> 
         </Col>
         <Col>
         <Component className="component" name="freshBook" number={1444} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/991e7b27368257437809e4d32c25f701/freshbooks.jpg" />
         </Col>
         </Row>

         <Row className='includes__sub'>
         <Col>
          <Component className="component" name="Sap Bussiness One" number={1564} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/825a9f11f050e68db54b7ac340db6453/sap-business-one.jpg" />
         </Col>
         <Col>
          <Component className="component" name="Xero" number={1235} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/0e9ea4a5e5cf2a8df078d52418b4f1b3/xero.png" />
         </Col>
         <Col>
          <Component className="component" name="BlackLine" number={1434} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/9dcb4a83cd01717f725a919ca3257df1/blackline.jpg" />   
         </Col>
       </Row>
    </div>
  )
}

export default Accounting