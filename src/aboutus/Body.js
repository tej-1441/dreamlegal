import React from 'react'
import TeamMember from './TeamMember'
import Investor from './Investor'
import './Body.css';

function Body() {
  return (
    <div className='body'>
        <div className="body__about">
            <h1 className='body__about__header'>Whats make us the DreamLegal</h1>
            <p className='body__about__para'>AI is the future, but what is the future of
             humans in AI? We at Precily firmly believe that 
             AI will push forward the human race by unleashing 
             human bandwidth to solve even more complex problems. 
             Precily is determined to provide latest deep learning and Artificial 
             Intelligence Technologies that help organisations increase the efficiency 
             of their operations in solving complex
             problems and foster large scale and rapid innovation.</p>
        </div>
        <div className="body__team">
            <h1 className='body__team__header'>
                About the team
            </h1>
            <div className='team__members'>
                <TeamMember  src="https://www.precily.com/static/media/bharat_rao.853bfbe1.svg"
                        name="Bharat Rao"
                        title="Founder/CEO"
                        />
                <TeamMember  src="https://www.precily.com/static/media/anil.58873867.jpg"
                    name="Anil Advani"
                    title="Investor/legal Counsel"
                    />
                <TeamMember  src="https://www.precily.com/static/media/rohit_goyal.90cda0f1.png"
                    name="Rohit Goyal"
                    title="Investor/Stratgic Advisor"
                />
            </div>
            <div className="our__investor">
                <h1 className='our__investor__heading'>
                Our investor and affiliations
                </h1>
                <div className='our__investor__company'>
                 <Investor name="Windrose" 
                 src="https://www.precily.com/static/media/windorse.d2e1748d.png"
                 />
                  <Investor name="Inventus" 
                 src="https://inventuspower.com/wp-content/themes/inventus/dist/images/logo.svg"
                 />
                 </div>
            </div>
       </div>
    </div>
  )
}

export default Body