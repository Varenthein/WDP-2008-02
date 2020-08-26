import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row col-12'>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Policy</a>
                </li>
                <li>
                  <a href='#'>Conditions</a>
                </li>
                <li>
                  <a href='#'>Online support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-2 col-lg-3'>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='#'>Login</a>
                </li>
                <li>
                  <a href='#'>My cart</a>
                </li>
                <li>
                  <a href='#'>Wishlist</a>
                </li>
                <li>
                  <a href='#'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>Specials</a>
                </li>
                <li>
                  <a href='#'>New products</a>
                </li>
                <li>
                  <a href='#'>Best Sellers</a>
                </li>
                <li>
                  <a href='#'>Out Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='#'>Payment options</a>
                </li>
                <li>
                  <a href='#'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='#'>Returns</a>
                </li>
                <li>
                  <a href='#'>Shipping</a>
                </li>
              </ul>
            </div>
            <img src='./images/cards.png' alt='Supported credit cards' />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-3 col-md-12 col-lg-3 text-center align-items-center'></div>
          <div className={'col text-center ' + styles.copyright}>
            <p className='text-sm-center text-md-left text-lg-center'>
              ©Copyright 2020 Bazar | All Rights Reserved
            </p>
          </div>
          <div className={'col text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
