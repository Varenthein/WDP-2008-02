import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './Promoted.module.scss';
import PromotedProductBox from './PromotedProductBox.js';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwipeableViews from 'react-swipeable-views';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

class Promoted extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { products } = this.props;
    const { activeCategory, activePage } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const hotDealsProducts = categoryProducts.filter(
      item => item.hotDeals === 'HOT DEALS'
    );
    const saleProducts = categoryProducts.filter(item => item.promo === 'sale');

    const productCount = saleProducts.length;

    const swipeRight = () => {
      if (activePage + 1 < productCount) {
        this.handlePageChange(activePage + 1);
      }
    };

    const swipeLeft = () => {
      if (activePage > 0) {
        console.log(activePage);
        console.log(productCount);
        this.handlePageChange(activePage - 1);
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <Col
              xs={12}
              md={6}
              lg={4}
              key={categoryProducts[0].id}
              className='d-none d-md-block'
            >
              <PromotedProductBox products={hotDealsProducts} />
            </Col>
            {saleProducts.slice(activePage, activePage + 1).map(product => (
              <Col
                key={product.name}
                xs={12}
                md={6}
                lg={8}
                className={styles.rightSide}
              >
                <div className={styles.rightSidePhoto}>
                  <img src={product.image} alt='promotedExample' />
                  <div className={styles.rightSideStripe}>
                    <div className={styles.rightSideStripeTextBig}>
                      INDOOR <b>FURNITURE</b>
                    </div>
                    <div className={styles.rightSideStripeTextSmall}>
                      SAVE UP TO 50% OF ALL FURNITURE
                    </div>
                  </div>
                </div>
                <div className={styles.buttonShop}>
                  <Button className={styles.buttonShopNow} variant='outline'>
                    SHOP NOW
                  </Button>
                </div>
                <div className={styles.arrows}>
                  <button className={styles.arrow} onClick={() => swipeLeft()}>
                    <div className={styles.arrowShadow}></div>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleLeft}
                      className={styles.leftArrow}
                    ></FontAwesomeIcon>
                  </button>
                  <button className={styles.arrow} onClick={() => swipeRight()}>
                    <div className={styles.arrowShadow}></div>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className={styles.rightArrow}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </Col>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

Promoted.defaultProps = {
  categories: [],
  products: [],
};

export default Promoted;
