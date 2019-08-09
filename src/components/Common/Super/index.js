import React, { useState, useEffect } from 'react';
import Typography from '../Typography';
import styles from './Super.module.scss';
import { withRouter, Link } from 'react-router-dom';

const Super = ({title, imgSrc, location}) => {

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    let aux = [{path:'', name: 'Home'}];

    location.pathname.split('/').filter(Boolean).forEach((route, i) => {
      aux.push({path:`${aux[i].path}${route}/`, name: route});
    });

    setRoutes(aux);
  }, [location]);
  
  return(
    <div style={{ backgroundImage: `url(${imgSrc})` }} className={styles.Super}>
      <div className={styles.inner}>
        <Typography className={styles.route} component="p" variant="body">
          { 
            routes.map((route, i) => 
              <React.Fragment key={i}>
                <Link key={`link-${i}`} className={styles.link} to={`/${route.path}`}>{route.name.charAt(0).toUpperCase() + route.name.slice(1)}</Link>
              </React.Fragment>
            )
          }
        </Typography>
        <Typography className={styles.title} component="h2" variant="title">
          { title }
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(Super);