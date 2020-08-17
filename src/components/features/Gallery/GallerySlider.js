import React from 'react';
import PropTypes from 'prop-types';

import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class GallerySlider extends React.Component {
  state = {
    activeCategory: 'topSeller',
  };

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { products, gallery } = this.props;
    const { activeCategory } = this.state;

    const topSeller = products.filter(item => item.topSeller);
    const saleOff = products.filter(item => item.oldPrice);
    const featured = products.filter(item => item.newFurniture === true);
    const topRated = products.filter(item => item.stars >= 4);

    console.log(topSeller);

    return (
      <div className={styles.root}>
        <div className={styles.title}>FURNITURE GALLERY</div>
        <div className={styles.menu}>
          <ul>
            {gallery.map(item => (
              <li key={item.id}>
                <a
                  className={item.id === activeCategory && styles.active}
                  onClick={() => this.handleCategoryChange(item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sliderImageWrapper}>
          <img
            src={topSeller[5].image}
            alt='Coming soon!'
            className={styles.sliderImage}
          />

          <div className={styles.buttonsWrapper}>
            <div className={styles.button}>
              <div className={styles.buttonHover}>
                <div>
                  <Button variant='gallerySlider'>
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                </div>
              </div>
              <div className={styles.description}>Add To Favorite</div>
            </div>

            <div className={styles.button}>
              <div className={styles.buttonHover}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
              </div>
              <div className={styles.description}>Add To Compare</div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonHover}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </div>
              <div className={styles.description}>Enlarge</div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonHover}>
                <Button variant='gallerySlider'>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </Button>
              </div>
              <div className={styles.description}>Add To Cart</div>
            </div>
          </div>
          <div className={styles.ratingCard}>
            <div className={styles.priceCirlce}>
              <div>$ {topSeller[5].price}</div>
              <div>$ {topSeller[5].oldPrice}</div>
            </div>

            <div className={styles.content}>
              <div></div>
              <h5>{topSeller[5].name}</h5>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= topSeller[5].stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
              <div></div>
            </div>
          </div>

          <div className={styles.slider}></div>
        </div>
      </div>
    );
  }
}

GallerySlider.propTypes = {
  gallery: PropTypes.array,
  products: PropTypes.array,
};

export default GallerySlider;
