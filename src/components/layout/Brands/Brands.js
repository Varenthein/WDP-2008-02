import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  rightAction() {
    this.setState(state => ({
      activePage: state.activePage + 1,
    }));
  }

  leftAction() {
    this.setState(state => ({
      activePage: state.activePage - 1,
    }));
  }

  render() {
    const { brands, device } = this.props;

    const brandOnDevice =
      device === 'small' ? 1 : device === 'medium' ? 2 : device === 'large' ? 3 : 6;
    const pageCount = Math.ceil(brands.length / brandOnDevice);

    const pages = [];
    for (let i = 0; i < pageCount; i++) {
      pages.push(
        <div key={i} className={styles.brandsImages}>
          {brands.slice(i * brandOnDevice, (i + 1) * brandOnDevice).map(brand => (
            <div key={brand.id}>
              <img
                src={brand.brandLogoImage}
                alt={'brand'}
                className={styles.brandLogoImage}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.arrowLeft} onClick={() => this.leftAction()}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  className={styles.leftArrow}
                ></FontAwesomeIcon>
              </div>
              {pages}
              <div className={styles.arrowRight} onClick={() => this.rightAction()}>
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
  device: PropTypes.string,
  //brands: PropTypes.any,
};

export default Brands;
