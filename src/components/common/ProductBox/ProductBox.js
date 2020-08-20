import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class ProductBox extends React.Component {
  state = {
    favorite: this.props.favorite,
  };

  handelFavorite(value, e) {
    e.preventDefault();
    this.setState({ favorite: value });
  }

  render() {
    const {
      name,
      price,
      promo,
      stars,
      image,
      oldPrice,
      compare,
      id,
      addToCompare,
      countProductToCompare,
    } = this.props;
    const { favorite } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <img src={image} alt={'coming soon'} className={styles.image} />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              onClick={event => this.handelFavorite(!favorite, event)}
              variant={favorite ? 'active' : 'outline'}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              onClick={event => {
                event.preventDefault();
                if (countProductToCompare() < 4) {
                  addToCompare(id);
                }
              }}
              variant={compare ? 'active' : 'outline'}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            <Button noHover variant='small'>
              $ {price}
            </Button>
            {oldPrice ? <div className={styles.oldPrice}>$ {oldPrice}</div> : ''}
          </div>
        </div>
      </div>
    );
  }
}

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  addToCompare: PropTypes.func,
  countProductToCompare: PropTypes.func,
};

export default ProductBox;
