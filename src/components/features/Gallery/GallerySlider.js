import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GallerySlider.module.scss';
import GallerySliderCard from './GallerySliderCard';
import { useTransition, animated } from 'react-spring';

const GallerySlider = ({ galleryCategory, device }) => {
  const [index, setIndex] = useState(0);

  const transition = useTransition(galleryCategory[index], galleryCategory[index].id, {
    from: { o: 0 },
    enter: { o: 1 },
    leave: { o: 0 },
    config: { duration: 1500 },
  });

  return (
    <div className={styles.root}>
      <div className={styles.title}>FURNITURE GALLERY</div>
      <div className={styles.menu}>
        <ul>
          {galleryCategory.map(item => (
            <li key={item.id}>
              <a
                className={galleryCategory.indexOf(item) === index && styles.active}
                onClick={() => setIndex(galleryCategory.indexOf(item))}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.wrapper}>
        {transition.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              opacity: props.o.interpolate([0, 0.5, 1, 1.5, 2], [0, 0, 1, 0, 0]),
            }}
          >
            <GallerySliderCard category={item} deviceName={device} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

GallerySlider.propTypes = {
  galleryCategory: PropTypes.array,
  o: PropTypes.number,
  device: PropTypes.string,
};

export default GallerySlider;
