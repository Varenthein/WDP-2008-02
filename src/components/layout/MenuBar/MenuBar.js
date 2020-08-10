import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

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
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='row align-items-center d-none d-md-flex d-lg-none'>
        <div className={'col-12 ' + styles.menu}>
          <ul>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
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
          <DropdownButton id='dropdown-basic-button' className='navbar-toggler'>
            <Dropdown.Item href='#'>Furniture</Dropdown.Item>
            <Dropdown.Item href='#'>Chair</Dropdown.Item>
            <Dropdown.Item href='#'>Table</Dropdown.Item>
            <Dropdown.Item href='#'>Sofa</Dropdown.Item>
            <Dropdown.Item href='#'>Bedroom</Dropdown.Item>
            <Dropdown.Item href='#'>Blog</Dropdown.Item>
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
