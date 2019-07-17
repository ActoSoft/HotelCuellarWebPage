import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazy-load';
import './Home.scss';
import { BookForm } from '../../Header';
import Rooms from '../../Rooms';
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
          <LazyLoad offset={100}>
            <React.Fragment>
              <img alt="slide" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/51424857_2319719334913940_3316925327699083264_o.jpg?_nc_cat=109&_nc_oc=AQnfWsakckNsOi_k_O47WM9mH6FBaQSwO8YB0v6gieGKNor6Eh-AQrgqKRlXGDZ6cvU&_nc_ht=scontent.fmex10-2.fna&oh=7fbe28104a70ca806f8385f8fbd0ebd4&oe=5DA4E0E2" />
              {/* <p className="legend">Legend 2</p> */}
            </React.Fragment>
          </LazyLoad>
          <LazyLoad offset={100}>
            <img alt="slide" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/50788430_2317722425113631_7741016619270275072_o.jpg?_nc_cat=107&_nc_oc=AQnuXr_PMiOavn7WluzqXiEJzaJl7ZEbOSKia-vNrNsL_IxYcRh0wfbe0wROvj4Hv_o&_nc_ht=scontent.fmex10-2.fna&oh=2529d609e41dcc56516fc82105208eea&oe=5DAF0F6E" />
          </LazyLoad>
          <LazyLoad offset={100}>
            <img alt="slide" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/50990872_2314395405446333_7031994351370633216_o.jpg?_nc_cat=106&_nc_oc=AQlltPWlIavdVin8IrpQVdCzZ4zE3MWLhS7cyQFSbmEScFH0pIZtBEWWyBEwZOQPAiM&_nc_ht=scontent.fmex10-2.fna&oh=8c8bb7825362ef691e0ce23acaea3bb6&oe=5DB0447A" />
          </LazyLoad>
        </Carousel>
        <div className="form-container">
          <BookForm />
        </div>
      </article>
      <main>
        <Rooms rooms={rooms} />
      </main>
    </section>
  );
};

export default Home;