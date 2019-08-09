import React, { useState, useEffect } from 'react';
import { Section, Super, Typography } from '../../Common';
import { Carousel as OtherCarousel } from 'react-responsive-carousel';
import { Row, Grid, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazy-load';
import { BookForm } from '../../Header';
import './RoomDetail.scss';
import { MdChildCare, MdFace } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
// import ReactImageMagnify from 'react-image-magnify';

const RoomDetails = ({price, adults, children, beds}) => {
  return(
    <div className="RoomDetails">
        <div className="price" >
          <Typography align="center" variant="body">
            Price <span className="pricing">${price}</span> <span className="desc">/ Night</span>
          </Typography>
        </div>
        <div xs={12} className="body">
          <Typography component="h4">
            Room Details
          </Typography>
          <div className="item" >
            <div className="icon">
              <MdFace />
            </div>
            <div className="desc">
              <Typography variant="body" className="">
                Adults: 
              </Typography>
            </div>
            <div className="cuant">
              { adults }
            </div>
          </div>
          <div className="item" >
            <div className="icon">
              <MdChildCare />
            </div>
            <div className="desc">
              <Typography variant="body" className="">
                Children: 
              </Typography>
            </div>
            <div className="cuant">
              { children }
            </div>
          </div>
          <div className="item" >
            <div className="icon">
              <FaBed />
            </div>
            <div className="desc">
              <Typography variant="body" className="">
                Beds: 
              </Typography>
            </div>
            <div className="cuant">
              { beds }
            </div>
          </div>
        </div>
    </div>
  );
};

const Feature = ({feature}) => {
  return(
    <Col xs={6} className="feature">
      <Typography variant="body">
        { feature }
      </Typography>
    </Col>
  );
};

const Carousel = ({children, ...props}) => {
  const getImages = (items) => {
    console.log('Run');
    return React.Children.map(items, child => {
      if(child.type !== "img") {
        return getImages(child.props.children);
      }

      if (!child || child.length === 0) {
        return null;
      }

      return child;
    });
  }
  
  useEffect(() => {
    const images = getImages(children)
    console.log(images);
  }, []);
  
  return(
    <OtherCarousel {...props}>
      { children }
    </OtherCarousel>
  )
};

const RoomDetail = () => {
  const [ room ] = useState({
    name: 'Deluxe Room',
    desc1: 'Deluxe Rooms offer stylish comfort with the luxury of space. The rooms feature an inviting earth-tone design that is based on warm sycamore veneers. In addition, these rooms are decorated with original local artwork and feature views of thei cityscape. This Deluxe Suite is our signature room and perfect for that romantic escape. While the best way to experience our hotel with your family is to spread out in one of our two or three bedroom deluxe suites. They offer all of the amenities of our deluxe suite plus the additional bedrooms to accommodate your family in comfort.Beyond the traditional concept of rest and relaxation, we have created a journey of serenity revolved around two people in love.',
    desc2: 'Our Double rooms (for 2 people) are air conditioned and have a full bed (from 140cm to 160cm), a flat screen TV, free WiFi, a safe and a private bathroom (bathtub or shower) with complimentary toiletries and a hair dryer. These rooms all have an office area and are non-smoking.',
    cover: "https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/po2.jpg",
    images: [
      "https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/a1-1360x800.jpg?1565206982850",
      "https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/a3-1360x800.jpg?1565206993076",
      "https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/a2-1360x800.jpg?1565206983276",
    ],
    details: {
      price: 640.0,
      adults: 24,
      children: 0,
      beds: 2
    },
    features: [
      'Attached Bathroom',
      'Airport shuttle',
      'Non-smoking rooms',
      'Elevator',
      'Air conditioning',
      'Heating',
      'Free parking',
      'Family rooms',
      'Pool and Spa',
      'Living Area'
    ],
    additionalInformation: 'Bed : 2 king size bed Occupancy : 1 adult View : Panoramic views of the city. Size : 484 sqf of luxury. Bathroom : spacious bathroom with Crispy Mint premium toiletries  Deluxe Rooms offer stylish comfort with the luxury of space. The rooms feature an inviting earth-tone design that is based on warm sycamore veneers. In addition, these rooms are decorated with original local artwork and feature views of thei cityscape. This Deluxe Suite is our signature room and perfect for that romantic escape. While the best way to experience our hotel with your family is to spread out in one of our two or three bedroom deluxe suites. They offer all of the amenities of our deluxe suite plus the additional bedrooms to accommodate your family in comfort. Make your holidays one for indulgence, and step into the world of the Swing Hotel. From inside to outside, you’ll find beautifully crafted spaces becoming the perfect stages for the coolest of experiences: whether that’s relaxing in your gorgeous hotel suite on your personalised super-king sized bed, or watching the sun glitter across the ocean from your Hotel Terrace. Now is your time to experience one of the world’s most iconic hotels. Not only will you be one of the first to enjoy the stunningTerrace with its choice of pools and private beach, you will also receive a complimentary fourth night when you book a suite for three nights, giving you even more time to explore and indulge in the magnificent facilities.',

  });
  
  return(
    <React.Fragment>
      <Super 
        title={room.name} 
        imgSrc={room.cover}
      />
      <Section className="RoomDetail">
        <Grid fluid>
          <Row>
            <Col xs={12} md={8}>
              <OtherCarousel showThumbs={true} >
                {
                  room.images.map(img => 
                    <LazyLoad height={476} offset={300}>
                      {/* <ReactImageMagnify
                        { ...{
                          smallImage: {
                            alt: "carousel",
                            isFluidWidth: true,
                            src: img
                          },
                          largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800
                          }
                        }}
                      /> */}
                      <img src={img} />
                    </LazyLoad>
                  )
                }
              </OtherCarousel>
            </Col>
            <Col xs={12} md={4}>
              <BookForm className="full-width" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Row>
                <Col className="padding-bot" xs={12} md={7}>
                  <Typography className="desc1" align="justified" variant="body">
                    {room.desc1}
                  </Typography>
                </Col>

                <Col xs={12} md={5}>
                  <RoomDetails {...room.details} />
                </Col>

                <Col xs={12}>
                  <Typography className="desc2" align="justified" variant="body">
                    {room.desc2}
                  </Typography>
                </Col>

                <Col className="RoomFeatures" xs={12}>
                  <Typography variant="sub-title">
                    Room Features
                  </Typography>
                  <Row>
                    {
                      room.features.map(feature => <Feature feature={feature} /> )
                    }
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={4}>
            </Col>
          </Row>
        </Grid>
      </Section>
    </React.Fragment>
  )
};

export default RoomDetail;