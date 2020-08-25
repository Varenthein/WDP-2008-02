import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySliderContainer';
import Button from '../../common/Button/Button';

const Gallery = ({ products, device }) => {
  const imageContent = products[0];

  const setDevice = thisDevice => {
    return thisDevice === 'mobile' || thisDevice === 'smobile' ? true : false;
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={setDevice(device) ? styles.mobileColumn : 'row'}>
          <Col xs={12} sm={6} md={6} lg={6} className={styles.mobileRightSlider}>
            <GallerySlider />
          </Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            className={setDevice(device) ? styles.mobileLeftImage : null}
          >
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={imageContent.image}
                alt='coming soon'
              />
              <div className={styles.content}>
                <div>
                  <h6>from </h6>
                  <h1>$ 50.80</h1>
                </div>
                <h1>Bedroom bed</h1>
                <Button variant='gallery' className={styles.button}>
                  SHOP NOW
                </Button>
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
  device: PropTypes.string,
};

export default Gallery;
