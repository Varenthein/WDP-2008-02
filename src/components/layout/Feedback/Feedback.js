import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>{feedback[0].title}</h3>
              </div>
              <div className={styles.headingEmpty}></div>

              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a></a>
                    <a></a>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.sign}>{feedback[0].sign}</div>
            <div className={styles.opinion}>{feedback[0].opinion}</div>
            <div className={styles.clientsData}>
              <div>
                <img
                  src={feedback[0].client_image}
                  alt={'coming soon'}
                  className={styles.client_image}
                />
              </div>
              <div className={styles.client_nameAndType}>
                <div className={styles.client_name}>{feedback[0].client_name}</div>
                <div className={styles.client_type}>{feedback[0].client_type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sign: PropTypes.string,
      opinion: PropTypes.string,
      client_image: PropTypes.string,
      client_name: PropTypes.string,
      client_type: PropTypes.string,
    })
  ),
};

export default Feedback;
