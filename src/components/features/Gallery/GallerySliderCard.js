import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import styles from './GallerySliderCard.module.scss';
import { useTransition, animated } from 'react-spring';

const GallerySliderCard = ({ category, deviceName }) => {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const products = category.products;
  const productsPerPage =
    deviceName === 'smobile'
      ? 6
      : deviceName === 'mobile'
      ? 4
      : deviceName === 'tablet'
      ? 4
      : 6;

  const pageCount = Math.ceil(products.length / productsPerPage);

  const slideLeft = (page, event) => {
    event.preventDefault();
    setPage(page === 0 ? page : page - 1);
  };

  const slideRight = (page, event) => {
    event.preventDefault();
    setPage(page === pageCount - 1 ? page : page + 1);
  };

  const transition = useTransition(products[index], products[index].id, {
    from: { o: 0 },
    enter: { o: 1 },
    leave: { o: 0 },
    config: { duration: 1500 },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {transition.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              opacity: props.o.interpolate([0, 0.5, 1, 1.5, 2], [0, 0, 1, 0, 0]),
            }}
          >
            <img src={item.image} alt='Coming soon!' className={styles.sliderImage} />
            <div className={styles.ratingCard}>
              <div className={styles.priceCirlce}>
                <h5>$ {item.price}</h5>
                {item.oldPrice ? <h6>$ {item.oldPrice}</h6> : null}
              </div>
              <div className={styles.content}>
                <h5>{item.name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= item.stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.buttonsWrapper}>
              <div className={styles.button}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </Button>
                <span>Add To Favorite</span>
              </div>
              <div className={styles.button}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
                <span className={styles.description}>Add To Compare</span>
              </div>
              <div className={styles.button}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <span className={styles.description}>Enlarge</span>
              </div>
              <div className={styles.button}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </Button>
                <span>Add To Cart</span>
              </div>
            </div>
          </animated.div>
        ))}
      </div>

      <div className={styles.slider}>
        <Button variant='galleryArrow' onClick={event => slideLeft(page, event)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <div className={styles.sliderImageWrapper}>
          {products.slice(page * 6, (page + 1) * 6).map(item => (
            <a
              className={
                item.id === products[index].id
                  ? styles.activeImage
                  : styles.inActiveImage
              }
              key={item.id}
              onClick={() => setIndex(products.indexOf(item))}
            >
              <img src={item.image} alt='coming soon' />
            </a>
          ))}
        </div>
        <Button variant='galleryArrow' onClick={event => slideRight(page, event)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </div>
  );
};

GallerySliderCard.propTypes = {
  category: PropTypes.array,
  o: PropTypes.number,
  deviceName: PropTypes.string,
};

export default GallerySliderCard;
