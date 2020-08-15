import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySliderContainer';
import Button from '../../common/Button/Button';

const Gallery = ({ products }) => {
  const imageContent = products[0];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <Col xs={12} md={6}>
            <GallerySlider />
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={imageContent.image}
                alt='coming soon'
              />
              <div className={styles.content}>
                <div>
                  <sup>from </sup>$ 50.80
                </div>
                <div>Bedroom bed</div>
                <div>
                  <Button noHover variant='gallery'>
                    SCHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  products: PropTypes.array,
  saleOff: PropTypes.object,
};

export default Gallery;
