import React from 'react';
import Component from './Component';
import './Common.css';

function EcommercePlatform() {
  return (
    <div className='includes__all'>
    <div className='includes__sub'>
      <Component className="component" name="Shopify" number={3406} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/8dfd1a922e19ef6ffc78a2bbe094855c/shopify.png" />
      <Component className="component" name="WooCommerce" number={2360} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/c046e889730d74b1253921532e5d5062/woocommerce.jpg" />
      <Component className="component" name="Shopify Plus" number={2407} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/66d6e3503b254e98eee1866c9eb83f23/shopify-plus.png"/>
     </div>

     <div className='includes__sub'>
      <Component className="component" name="Big Commerce" number={2780} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/a769309e066f95c901391c849ce5ac8f/bigcommerce.jpg" />
      <Component className="component" name="Ecwid" number={2905} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/e534e0cc2b2a60a9783e0657d56c0261/ecwid.png" /> 
      <Component className="component" name="Salesforces Commerces B2C" number={2309} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/8b6b58e5e7cd56e6cd0b28cc27d74982/salesforce-commerce-for-b2c.jpg" />
      </div>

      <div className='includes__sub'>
      <Component className="component" name="Vendasta" number={4308} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/55e1ed54d8e572d3a6d75f10d0e08610/vendasta.jpg" />
      <Component className="component" name="FastSpring" number={5308} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/0535a176af7cf537a03eae0c3afc4052/fastspring.jpg" />
      <Component className="component" name="CommentSold" number={6408} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/2afa35617a2d63add6ca644cc7bbbd03/commentsold.png" />   
    </div>
 </div>
  )
}

export default EcommercePlatform