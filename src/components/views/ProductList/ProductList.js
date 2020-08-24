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
      <div className={styles.formWrapper}>
        <div className={'col-auto' + styles.sort}>
          <form>
            <label className={styles.sortLabel} htmlFor='sortBy'>
              Sort By
            </label>
            <select id='sortBy'>
              <option value='lowestPrice'>Price: Lowest first</option>
              <option value='lowestPrice'>Price: Highest first</option>
            </select>
          </form>
        </div>
        <div className={'col-auto' + styles.show}>
          <form>
            <label className={styles.showLabel} htmlFor='show'>
              Show
            </label>
            <select id='show'>
              <option value='14'>14</option>
              <option value='8'>8</option>
              <option value='4'>4</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
