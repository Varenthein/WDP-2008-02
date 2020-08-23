import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage, manualPageChange: true });
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  render() {
    const { brands, deviceName } = this.props;
    const { activePage } = this.state;
    const productsPerPage =
      deviceName === 'smobile'
        ? 1
        : deviceName === 'mobile'
        ? 2
        : deviceName === 'tablet'
        ? 3
        : 6;

    const pageCount = Math.ceil(brands.length / productsPerPage);
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
      pages.push(
        <div key={i} className={styles.brandsImages}>
          {brands.slice(i * productsPerPage, (i + 1) * productsPerPage).map(brand => (
            <div key={brand.id} className={styles.brandLogoImage}>
              <img src={brand.brandLogoImage} alt={'brand'} />
            </div>
          ))}
        </div>
      );
    }
    const pageDecrease = () => {
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const pageIncrease = () => {
      if (activePage === pageCount - 1) {
        return;
      } else {
        this.handlePageChange(activePage + 1);
      }
    };
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.arrowLeft} onClick={pageDecrease}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  className={styles.leftArrow}
                ></FontAwesomeIcon>
              </div>
              <div className={styles.imageWrapper}>
                <Swipeable
                  activePage={this.state.activePage}
                  rightAction={this.handleRightAction}
                  leftAction={this.handleLeftAction}
                >
                  {pages}
                </Swipeable>
              </div>
              <div className={styles.arrowRight} onClick={pageIncrease}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className={styles.rightArrow}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      brandLogoImage: PropTypes.string,
    })
  ),
  deviceName: PropTypes.string,
  //brands: PropTypes.any,
};

export default Brands;
