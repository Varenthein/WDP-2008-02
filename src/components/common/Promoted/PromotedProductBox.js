import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class PromotedProductBox extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { products } = this.props;
    const { activePage } = this.state;
    const swipePage = () => {
      if (activePage + 1 < products.length) {
        this.handlePageChange(activePage + 1);
      }
      if (activePage + 1 >= products.length) {
        this.handlePageChange(0);
      }
    };
    let index = setTimeout(swipePage, 3000);
    const reset = () => {
      clearTimeout(index);
    };
    const dots = [];
    for (let i = 0; i < products.length; i++) {
      dots.push(
        <a
          onClick={event => {
            this.handlePageChange(i);
            reset();
          }}
          className={i === activePage && styles.active}
        ></a>
      );
    }

    return (
      <div className={styles.root}>
        {products.slice(activePage, activePage + 1).map(product => (
          <div key={product.id}>
            <div className={styles.photo}>
              <img src={product.image} alt={'coming soon'} className={styles.image} />
              <div className={styles.hotDeals}>
                {product.hotDeals}
                <div className={styles.dots}>{dots}</div>
                <div className={styles.buttons}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                    CART
                  </Button>
                </div>
                <div className={styles.circles}>
                  <div className={styles.circle}>
                    <div className={styles.circleText}>
                      <h5>25</h5>
                      <h6>DAYS</h6>
                    </div>
                  </div>
                  <div className={styles.circle}>
                    <div className={styles.circleText}>
                      <h5>10</h5>
                      <h6>HRS</h6>
                    </div>
                  </div>
                  <div className={styles.circle}>
                    <div className={styles.circleText}>
                      <h5>45</h5>
                      <h6>MINS</h6>
                    </div>
                  </div>
                  <div className={styles.circle}>
                    <div className={styles.circleText}>
                      <h5>30</h5>
                      <h6>SECS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h5>{product.name}</h5>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= product.stars ? (
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
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faEye}>Enlarge</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.price}>
                {product.oldPrice ? (
                  <div className={styles.oldPrice}>$ {product.oldPrice}</div>
                ) : (
                  ''
                )}
                <Button noHover variant='small'>
                  $ {product.price}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      hotDeals: PropTypes.string,
      stars: PropTypes.number,
      oldPrice: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

export default PromotedProductBox;
