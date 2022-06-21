import React from 'react'
import Component from './Component'
import './Common.css';
function Crm() {
  return (
    <div className='includes__all'>
    <div className='includes__sub'>
      <Component className="component" name="Salesforce" number={3500} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/c7667c650c352acba4bfca38ee89457b/salesforce-salesforce-sales-cloud.png" />
      <Component className="component" name="Hub Spot sales hub" number={2504} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/4d7168d7ef03c7cb46e7fa7c6b69bc48/hubspot-sales-hub.png" />
      <Component className="component" name="ActiveCompaign" number={2355} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/52e62a83669a0ca6cd4161c29cb72a9a/activecampaign.jpg"/>
     </div>

     <div className='includes__sub'>
      <Component className="component" name="Zoho CRM" number={4350} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/394ee214c0b04d1c4d3676ba83f23a45/zoho-crm.png" />
      <Component className="component" name="FreshSales" number={5360} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/30d3bb235a744cf3b68ac29381bc733b/freshsales.png" /> 
      <Component className="component" name="Pipedrive" number={4566} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/eeecb29f6fc37b3e94157832ad1a54dc/pipedrive.png" />
      </div>

      <div className='includes__sub'>
      <Component className="component" name="Sharp Spring" number={8040} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/4df5c4ff3ee55b521acff071ae484284/sharpspring.png" />
      <Component className="component" name="Copper" number={4509} rating={4} imgsrc="https://images.g2crowd.com/uploads/product/image/7aa022e0794ddf312ed089ff47fb04c1/copper.jpg" />
      <Component className="component" name="Keap" number={2309} rating={5} imgsrc="https://images.g2crowd.com/uploads/product/image/d3942a298dfbdef078f42573114df1d9/keap-keap.png" />   
    </div>
 </div>
  )
}

export default Crm