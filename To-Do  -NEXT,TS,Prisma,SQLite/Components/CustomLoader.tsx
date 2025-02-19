import React from 'react';
import styles from '@/styles/loader.module.css'

const CustomLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default CustomLoader;