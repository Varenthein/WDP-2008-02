import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-9 text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col-3 text-right d-none d-md-block ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col-3 text-right d-sm-block d-md-none ${styles.topMenu}`}>
          <DropdownButton id='dropdown-basic-button' className='navbar-toggler'>
            <Dropdown.Item href='#'>
              <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
            </Dropdown.Item>
            <Dropdown.Item href='#'>
              <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
