import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { Col } from 'react-flexbox-grid';

import styles from './MenuBar.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center d-none d-lg-flex'>
        <div className='col'>
          <ProductSearch />
        </div>
        <Col xs={12} md={6}>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <a href='/home' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='/furniture'>Furniture</a>
              </li>
              <li>
                <a href='/shop/chair'>Chair</a>
              </li>
              <li>
                <a href='/shop/table'>Table</a>
              </li>
              <li>
                <a href='/shop/sofa'>Sofa</a>
              </li>
              <li>
                <a href='/bedroom'>Bedroom</a>
              </li>
              <li>
                <a href='/blog'>Blog</a>
              </li>
            </ul>
          </div>
        </Col>
      </div>
      <div className='row align-items-center d-none d-md-flex d-lg-none'>
        <div className={'col-12 ' + styles.menu}>
          <ul>
            <li>
              <a href='/home' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='/furniture'>Furniture</a>
            </li>
            <li>
              <a href='/shop/chair'>Chair</a>
            </li>
            <li>
              <a href='/shop/table'>Table</a>
            </li>
            <li>
              <a href='/shop/sofa'>Sofa</a>
            </li>
            <li>
              <a href='/bedroom'>Bedroom</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='col-12'>
          <ProductSearch />
        </div>
      </div>
      <div className='row align-items-center d-sm-flex d-md-none'>
        <div className='col-9'>
          <ProductSearch />
        </div>
        <div className='col-3'>
          <DropdownButton
            id='dropdown-basic-button'
            className='navbar-toggler'
            title=''
          >
            <Dropdown.Item href='/home'>Home</Dropdown.Item>
            <Dropdown.Item href='/furniture'>Furniture</Dropdown.Item>
            <Dropdown.Item href='/shop/chair'>Chair</Dropdown.Item>
            <Dropdown.Item href='/shop/table'>Table</Dropdown.Item>
            <Dropdown.Item href='/shop/sofa'>Sofa</Dropdown.Item>
            <Dropdown.Item href='/bedroom'>Bedroom</Dropdown.Item>
            <Dropdown.Item href='/blog'>Blog</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
