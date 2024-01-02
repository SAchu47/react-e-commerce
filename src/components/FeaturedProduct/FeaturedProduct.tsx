import React from 'react';
import styles from './FeaturedProduct.module.css';
import { CartIcon, EyeIcon, LikeIcon } from '../../icons';

/*
    TO DO
    1. Interface
    2. Props
    3. Call to actions logics
*/

const FeaturedProduct = () => {
  return (
    <div className={styles.featured_product_main}>
      <div className={styles.featured_product_main_image}>
        <div className={styles.main_image_icons}>
          <div className={styles.image_icons_icon}>
            <LikeIcon fill="black" width={20} height={20} />
          </div>
          <div className={styles.image_icons_icon}>
            <CartIcon fill="black" width={20} height={20} />
          </div>
          <div className={styles.image_icons_icon}>
            <EyeIcon fill="black" width={20} height={20} />
          </div>
        </div>
        <img src="featuredProduct1.png" alt="" />
      </div>
      <div className={styles.featured_product_main_content}>
        <h5>Graphic Design</h5>
      </div>
    </div>
  );
};

export default FeaturedProduct;
