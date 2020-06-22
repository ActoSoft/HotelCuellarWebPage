import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazy-load';
import './Home.scss';
import { BookForm } from '../../Header';
import Rooms from '../../Rooms';
import Welcome from './Welcome';
import CostumersWord from './CostumersWord';
import CostumerWord from './CostumerWord';
import { FaAngleDoubleUp } from 'react-icons/fa';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import img from '../../../img/sliders/hotel_back_2.jpg';

const Home = () => {
  const [rooms, setRooms] = useState([
    {
      title: 'Deluxe Room',
      pricing: 640.00,
      description: 'Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.',
      key: 1,
      imgSrc: 'https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/po2-1360x800.jpg'
    },

    {
      title: 'Deluxe Room',
      pricing: 640.00,
      description: 'Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.',
      key: 1,
      imgSrc: 'https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/po2-1360x800.jpg'
    },

    {
      title: 'Deluxe Room',
      pricing: 640.00,
      description: 'Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.',
      key: 1,
      imgSrc: 'https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/po2-1360x800.jpg'
    },

    {
      title: 'Deluxe Room',
      pricing: 640.00,
      description: 'Lorem ipsum dolor amet selfies lyft small batch, nisi skateboard vexillologist trust fund leggings meditation hot chicken forage actually subway tile edison bulb. Ramps bespoke labore sriracha. Hella wayfarers locavore narwhal plaid veniam. Franzen copper mug actually, cray glossier excepteur affogato enamel pin.',
      key: 1,
      imgSrc: 'https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2018/01/po2-1360x800.jpg'
    }
  ]);

  return(
    <section className="Home">
      <article className="slider">
        <Carousel showIndicators={false} interval={2500} infiniteLoop autoPlay showStatus={false} showThumbs={false}>
          <LazyLoad height={window.innerHeight} offset={400}>
            <React.Fragment>
              <img alt="slide" src={img} />
              {/* <p className="legend">Legend 2</p> */}
            </React.Fragment>
          </LazyLoad>
          <LazyLoad height={window.innerHeight} offset={400}>
            <img alt="slide" src={img} />
          </LazyLoad>
          <LazyLoad height={window.innerHeight} offset={400}>
            <img alt="slide" src={img} />
          </LazyLoad>
        </Carousel>
        <div className="form-container">
          <BookForm />
        </div>
      </article>

      <main className="main-content">
        <Welcome />
        <Rooms rooms={rooms} />
        <CostumersWord >
          <CostumerWord
            imgSrc="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2017/12/team-member-6-475x345-200x200.jpg"
            desc="Duis metus sem, aliquet vitae mi eget, vehicula vehicula enim. In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed."
            name="Potry Madonnas"
            contact="Managing Director - AC Lens" >
          </CostumerWord>

          <CostumerWord
            imgSrc="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2017/12/team-member-7-475x345-200x200.jpg"
            desc="In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed. Integer ut urna sit amet mi commodo aliquam quis in nisl."
            name="John Welson"
            contact="Superviser - Walmart" >
          </CostumerWord>

          <CostumerWord
            imgSrc="https://demo.accesspressthemes.com/swing/city-hotel/wp-content/uploads/sites/6/2017/12/team-member-2-475x345-200x200.jpg"
            desc="Duis metus sem, aliquet vitae mi eget, vehicula vehicula enim. In consectetur velit lectus, sit amet sollicitudin ipsum suscipit sed."
            name="Kyara Hussain"
            contact="CEO - ExxonMobil" >
          </CostumerWord>
        </CostumersWord>
        <Gallery />
      </main>
      <ContactUs />
      <FaAngleDoubleUp className="goTop" onClick={() => window.scrollTo(0, 0)} />
    </section>
  );
};

export default Home;