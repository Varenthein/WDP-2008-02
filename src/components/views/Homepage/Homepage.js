import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Promoted from '../../common/Promoted/PromotedContainer';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
