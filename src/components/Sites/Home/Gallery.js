import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ImageCard, Section, SectionHeader } from '../../Common';

const Gallery = () => {

  const [ images ] = useState([
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/02/1.jpg",
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2019/06/gal3321.jpg",
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/02/3.jpg",
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/01/4.jpg",
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2019/06/gall321.jpg",
    "https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2019/06/gal45.jpg"
  ]);

  const [classNames, setClassNames] = useState({});

  useEffect(() => {
    console.warn('use effect');
    let cn = {};
    images.forEach((img, i) => {
      cn[i] = 'closed';
    });
    console.log(cn);
    setClassNames(cn)
  }, [images]);

  const handleClick = index => {
    setClassNames({
      ...classNames,
      [index]: classNames[index] === "opened" ? "closed" : "opened"
    });
  };
  
  return(
    <Section className="Gallery">
      <SectionHeader
        title="Hotel Gallery"
        extra="Maecenas sed diam eget risus varius blandit sit amr. Maecenas sed diam eget risus varius blandit sit amet non magna." />
      <Grid>
        <Row>
          {
            images.map((imgSrc, index) => 
              <Col xs={12} md={4} >
                <ImageCard
                  className={`pointer ${classNames[index]}`}
                  onClick={e => handleClick(index)}
                  imgSrc={imgSrc} />
              </Col>
            )
          }
        </Row>
      </Grid>
    </Section>
  )
};

export default Gallery;