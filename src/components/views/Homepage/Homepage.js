import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../common/Promoted/PromotedContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <ProductCompare />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
