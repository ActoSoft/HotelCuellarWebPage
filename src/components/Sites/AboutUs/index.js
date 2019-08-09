import React from 'react';
import { Section, Super, Typography, SectionHeader, Button } from '../../Common';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './AboutUs.module.scss';
import { FaCocktail, FaSwimmingPool, FaPersonBooth, FaBath } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import { GiWineGlass } from 'react-icons/gi';

const Card = ({imgSrc, title, subTitle, text, link}) => {
  return(
    <Col className={styles.card} xs={12} md={4}>
      <div className={styles.imgCont}>
        <img src={imgSrc} />
      </div>
      <div className={styles.body}>
        <Typography className={styles.title} variant="sub-title">
          {title}
        </Typography>
        <Typography className={styles.subTitle} variant="body">
          {subTitle}
        </Typography>
        <Typography className={styles.text} variant="body">
          {text}
        </Typography>
        <Button component="a" href={link} >Ver Detalles</Button>
      </div>
    </Col>
  );
};

const Facility = ({name, text, Icon}) => {
  return(
    <Col className={styles.Facility} xs={12} md={4}>
      <Row center="xs" start="md">
        <Col className={styles.icon} xs={12} md={3}>
          <Icon />
        </Col>
        <Col xs={12} md={9}>
          <Row>
            <Col className={styles.name} xs={12}>
              {name}
            </Col>
            <Col className={styles.text} xs={12}>
              {text}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
};

const AboutUs = ({}) => {

  const facilities = [
    {
      name: 'WELCOME DRIK',
      text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ultricies magna etut et lobortis.',
      icon: FaCocktail
    },
    {
      name: 'SWIMMING POOL',
      text: "In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl.",
      icon: FaSwimmingPool
    },
    {
      name: 'BODY MASSAGE',
      text: "There’s no spa as such on-site, but you can certainly book a Balinese massage or mani-pedi in the privacy of your suite aliquam quis in nisl.",
      icon: FaPersonBooth
    },
    {
      name: 'SUN BATH',
      text: "In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl.",
      icon: FaBath
    },
    {
      name: 'Laundry Service',
      text: "There’s no spa as such on-site, but you can certainly book a Balinese massage or mani-pedi in the privacy of your suite aliquam quis in nisl.",
      icon: MdLocalLaundryService
    },
    {
      name: 'Lounge & Bar',
      text: "In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl.",
      icon: GiWineGlass
    }
  ]
  
  return(
    <React.Fragment>
      <Super
        title="Sobre Nosotros"
        imgSrc="https://scontent.fmex10-2.fna.fbcdn.net/v/t31.0-8/26962053_2063581077194435_8342261090065595263_o.jpg?_nc_cat=101&_nc_oc=AQklhscY29GcyAfFsOBy-EWa-hveBgDxYzxP0scErQaBoyU3h8H7TPEKA3a0sOzQPus&_nc_ht=scontent.fmex10-2.fna&oh=d5ed810b668f60e5794c1ff38acb3882&oe=5DE548B7" />
      <Section className={styles.AboutUs}>
        <Grid fluid>
          <Row className={styles.textCont}>
            <Col xs={12} md={6} className={styles.largeText}>
              <Typography align="right" variant="sub-title">
                Fantastic place and what makes it better, Explore the sparkle<br />A special place where nature and man exist in harmony 
              </Typography>
            </Col>
            <Col xs={6} md={3} className={styles.text}>
              <Typography variant="body">
                Duis metus sem, aliquet vitae mi eget, vehicula vehicula enim.In consectetur velit lectus, <br/><br/>sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo.
              </Typography>
            </Col>
            <Col xs={6} md={3} className={styles.text}>
              <Typography variant="body">
                Duis metus sem, aliquet vitae mi eget, vehicula vehicula enim. In consectetur velit lectus, <br/><br/>sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo.
              </Typography>
            </Col>
          </Row>
          <Row center="xs" className={styles.images}>
            <Col className={styles.imgCont} xs={12} md={4}>
              <img src="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/02/3-370x315.jpg" />
            </Col>
            <Col className={styles.imgCont} xs={12} md={4}>
              <img src="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/02/6-370x315.jpg" />
            </Col>
            <Col className={styles.imgCont} xs={12} md={4}>
              <img src="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/02/5-370x315.jpg" />
            </Col>
          </Row>
          
          <SectionHeader 
            title="Hotel Facilities"
            extra="In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl." />
            
          <Row center="xs" start="md" className={styles.cards}>
            <Card
              imgSrc="https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/01/offer1.jpg"
              title="Wedding Bell Package"
              subTitle="Celebrate your special occasion"
              text="Splash lazily about admire the garden scenery (it’s all tropical plants and manicured lawns), or relax on one of the extra-comfy surrounding loungers with a book."
              link="#" />

            <Card
              imgSrc="https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/02/2.jpg"
              title="Rejuvenate your sences"
              subTitle="Pamper your blushes"
              text="Splash lazily about admire the garden scenery (it’s all tropical plants and manicured lawns), or relax on one of the extra-comfy surrounding loungers with a book."
              link="#" />

            <Card
              imgSrc="https://demo.accesspressthemes.com/swing/demo-four/wp-content/uploads/sites/6/2018/02/1.jpg"
              title="Fire for your desire"
              subTitle="Celebrate your special occasion"
              text="Splash lazily about admire the garden scenery (it’s all tropical plants and manicured lawns), or relax on one of the extra-comfy surrounding loungers with a book."
              link="#" />
          </Row>
          
          <SectionHeader 
            title="Hotel Facilities"
            extra="In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl." />
            
          <Row className={styles.facilities}>
            {
              facilities.map(fac =>
                <Facility 
                  name={fac.name}
                  text={fac.text}
                  Icon={fac.icon} />
              )
            }
          </Row>
        </Grid>
      </Section>
    </React.Fragment>
  )
};

export default AboutUs;