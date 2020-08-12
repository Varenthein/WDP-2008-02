import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.brandsImages}>
                {brands.map(brand => (
                  <img
                    key={brand.brandLogoImage}
                    src={brand.brandLogoImage}
                    alt={'brand'}
                    className={styles.brandLogoImage}
                  />
                ))}
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
  //brands: PropTypes.any,
};

export default Brands;
