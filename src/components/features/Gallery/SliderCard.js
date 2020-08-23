import React from 'react';
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
import styles from './GallerySlider.module.scss';

class SliderCard extends React.Component {
  state = {
    activeSlidePage: 0,
    activeProduct: this.props.category.products[0],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ activeProduct: this.props.category.products[0] });
    }
  }

  handelProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  slidePageRight(e, activeSlidePage) {
    e.preventDefault();
    this.setState({ activeSlidePage: activeSlidePage + 1 });
  }

  slidePageLeft(e, activeSlidePage) {
    e.preventDefault();
    if (activeSlidePage[0]) {
      this.setState({ activeSlidePage: activeSlidePage });
    } else {
      this.setState({ activeSlidePage: activeSlidePage - 1 });
    }
  }

  render() {
    const { category } = this.props;
    const { activeSlidePage, activeProduct } = this.state;
    return (
      <div className={styles.sliderImageWrapper}>
        <img
          src={activeProduct.image}
          alt='Coming soon!'
          className={styles.sliderImage}
        />
        <div className={styles.buttonsWrapper}>
          <div className={styles.button}>
            <Button variant='gallerySlider'>
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </Button>
            <div className={styles.description}>Add To Favorite</div>
          </div>
          <div className={styles.button}>
            <Button variant='gallerySlider'>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </Button>
            <div className={styles.description}>Add To Compare</div>
          </div>
          <div className={styles.button}>
            <Button variant='gallerySlider'>
              <FontAwesomeIcon icon={faEye} />
            </Button>
            <div className={styles.description}>Enlarge</div>
          </div>
          <div className={styles.button}>
            <Button variant='gallerySlider'>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Button>
            <div className={styles.description}>Add To Cart</div>
          </div>
        </div>
        <div className={styles.ratingCard}>
          <div className={styles.priceCirlce}>
            <div>$ {activeProduct.price}</div>
            <div>$ {activeProduct.oldPrice}</div>
          </div>
          <div className={styles.content}>
            <div></div>
            <h5>{activeProduct.name}</h5>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= activeProduct.stars ? (
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
        <div className={styles.slider}>
          <Button
            variant='galleryArrow'
            onClick={event => this.slidePageLeft(event, activeSlidePage)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          {category.products
            .slice(activeSlidePage * 6, (activeSlidePage + 1) * 6)
            .map(item => (
              <a
                className={
                  item.id === activeProduct.id
                    ? styles.activeImage
                    : styles.inActiveImage
                }
                key={item.id}
                onClick={() => this.handelProductChange(item)}
              >
                <img src={item.image} alt='coming soon' />
              </a>
            ))}
          <Button
            variant='galleryArrow'
            onClick={event => this.slidePageRight(event, activeSlidePage)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </div>
    );
  }
}

SliderCard.propTypes = {
  category: PropTypes.array,
};

export default SliderCard;
