import React, { useEffect, useState } from 'react';
import { Section, SectionHeader, Typography, Position, Button } from '../../Common';

const CostumersWord = ({children}) => {
  const [newChildren, setNewChildren] = useState([]);
  const [visibleEl, setVisibleEl] = useState(0);
  
  const makeChange = (step) => {
    let visible = visibleEl + step; 

    setNewChildren(React.Children.map(newChildren, child => {
      if(child.props.count === visible) {
        return React.cloneElement(child, {
          className: `slide ${step === 1 ? 'visible-left' : 'visible-right'}`
        });
      }

      if(child.props.count === visible + 1) {
        return React.cloneElement(child, {
          className: `slide next`
        });
      }

      if(child.props.count === visible - 1) {
        return React.cloneElement(child, {
          className: `slide prev`
        });
      }

      return React.cloneElement(child, {
        className: `slide not-visible`
      });
    }));

    setVisibleEl(visible);
  };
  
  useEffect(() => {
    console.log("New Children");
    let count = -1;
    let className;
    setNewChildren(React.Children.map(children, child => {
      count += 1;
      className = 'slide'
      className += count === 0 ? ' visible' : '';
      className += count === 1 ? ' next' : '';
      className += count !== 0 && count !== 1 ? ' not-visible' : '';
      return React.cloneElement(child, {
        className,
        count
      });
    }));
  }, []);


  const previous = () => {
    if(visibleEl - 1 < 0) {
      return;
    }
        
    makeChange(-1);
  };

  const next = () => {
    if(visibleEl + 1 === newChildren.length) {
      return;
    }

    makeChange(1);
  };
  
  return(
    <Section className="CostumersWord">
      <SectionHeader
        title="Costumers Word"
        extra="Proin quis turpis semper, onsectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit" >
        
      </SectionHeader>
      <div className="slider">
        { newChildren }
      </div>
      <div className="indicators">
        { 
          React.Children.map(newChildren, child => {
            return <div className={`circle ${visibleEl === child.props.count ? 'visible' : ''}`}></div>
          }) 
        }
      </div>
      <div className="control-prev" onClick={previous}>
        <div className="top"></div>
        <div className="bot"></div>
      </div>
      <div className="control-next" onClick={next}>
        <div className="top"></div>
        <div className="bot"></div>
      </div>
    </Section>
  );
};

export default CostumersWord;