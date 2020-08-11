import React from 'react';
// import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './Gallery.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Gallery = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div> Slider </div>
        <div> left photo </div>
      </div>
    </div>
  </div>
);

export default Gallery;
