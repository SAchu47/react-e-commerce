import React, { FC, ReactElement } from 'react';
import styles from './Category.module.css';

/*
  TO DO
  1. Interface
  2. use map
  3. pass as props
*/

const Category: FC = (): ReactElement => {
  return (
    <div className={styles.category_main}>
      <div className={styles.category_main_content}>
        <div className={styles.main_content_details}>
          <h2>Elements Style</h2>
          <div>
            <h6>Ends Today</h6>
            <h6>Explore Items</h6>
          </div>
        </div>
        <img src="category1.jpg" alt="" />
      </div>
      <div className={styles.category_main_content}>
        <div className={styles.main_content_details}>
          <h2>Unique Life</h2>
          <div>
            <h6>Your Space</h6>
            <h6>Explore Items</h6>
          </div>
        </div>
        <img src="category2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Category;
