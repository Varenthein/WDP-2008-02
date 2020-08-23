import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col-12 text-center ${styles.phoneNumber}`}>
          <h1>
            BEDROOM <b>FURNITURE</b>
          </h1>
          <p>
            ALWAYS <span>25%</span> OFF OR MORE
          </p>
        </div>
        <div className={`col-12 text-left ${styles.menu}`}>
          <a href='#'>Home</a>
          <a href='#'>Furniture</a>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
