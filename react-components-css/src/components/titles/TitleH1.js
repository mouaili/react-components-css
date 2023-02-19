import React from 'react';
import styles from './TitleH1.module.css';

const TitleH1 = ({ children, style }) => {
  return (
    <h1 className={styles['title']} style={style}>
      {children}
    </h1>
  );
};

export default TitleH1;
