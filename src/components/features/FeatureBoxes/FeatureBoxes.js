import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-flexbox-grid';
import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <Col xs={6} md={6} lg={3}>
          <a className='col'>
            <FeatureBox icon={faTruck} active>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </a>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <a className='col'>
            <FeatureBox icon={faHeadphones}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </a>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <a className='col'>
            <FeatureBox icon={faReplyAll}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </a>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <a className='col'>
            <FeatureBox icon={faBullhorn}>
              <h5>Member discount</h5>
              <p>-5% for every order</p>
            </FeatureBox>
          </a>
        </Col>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
