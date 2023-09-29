import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.errorMessage}>Page Not Found</div>
    </div>
  );
};

export default NotFound;
