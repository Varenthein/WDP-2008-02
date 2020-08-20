import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Promoted from '../../common/Promoted/PromotedContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <ProductCompare />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
