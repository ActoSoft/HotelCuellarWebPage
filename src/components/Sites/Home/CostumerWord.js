import React from 'react';
import { Typography, Position } from '../../Common';

const CostumerWord = ({className, component, imgSrc, desc, name, contact, ...props}) => {
  if(!component) {
    component = 'article';
  }

  if(!className) {
    className = '';
  }

  let CostumerWordBase = component;
  
  return(
    <CostumerWordBase {...props}
      className={`${className} CostumerWord`} >
      
      <Position flexDirection="column" vertical-align="middle">
        <Position align="center">
          <div className="image-container">
            <img src={imgSrc} alt="avatar" />
          </div>
        </Position>
        
        <div className="body">
          <Typography align="center" variant="sub-title-2" className="desc">
            { desc }
          </Typography>

          <Typography align="center" className="name">
            { name }
          </Typography>

          <Typography align="center" className="contact">
            { contact }
          </Typography>
        </div>
      </Position>
      

    </CostumerWordBase>
  );
};

export default CostumerWord;