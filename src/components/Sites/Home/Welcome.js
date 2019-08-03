import React from 'react';
import Section, { SectionHeader } from '../../Common/Section';
import { ImageCard } from '../../Common/Cards';
import { Typography, Position, Button } from '../../Common';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Welcome = () => {
  return(
    <Section>
      <Grid>
        <Row>      
          <Col xs={12} md={4}>
            <ImageCard 
              title={'Alojamiento de lujo'}
              imgSrc={'https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2019/06/ac1.jpg'} />
          </Col>      
          <Col xs={12} md={4}>
            <ImageCard 
              title={'Rooftop swimming'}
              imgSrc={'https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2019/06/ac22.jpg'} />
          </Col>        
          <Col xs={12} md={4}>
            <ImageCard 
              title={'Fine wine and dine'}
              imgSrc={'https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/02/1-service3.jpg'} />
          </Col>  
        </Row>
      </Grid>
      <SectionHeader
        title="Legendary style makes it one of the most prestigious Hotel."
        extra="Fantastic place and what makes it even better is that it is not part of some big international chain but locally owned and run. The rooms were great, if possible try to get a suite as it makes things easier with a young family, the hotel is in such a lovely position right on the beach, approximately 100 paces from sea to pool, a little longer via the bar for either a Piton beer or one of the fantastic cocktails!">
        
        <Position align="center">
          <Button style={{width: '250px', marginTop: '50px'}} dark> MÁS DE NOSOTROS </Button>
        </Position>
      </SectionHeader>
    </Section>
  );
};

export default Welcome;