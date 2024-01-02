import React, { FC, ReactElement } from 'react';
import styles from './FeaturedProducts.module.css';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts: FC = (): ReactElement => {
  return (
    <div className={styles.featured_products_main}>
      <div className={styles.featured_products_main_image}>
        <img src="featuredProductMain.png" alt="" />
      </div>
      <div className={styles.featured_products_main_products}>
        <div className={styles.main_products_content}>
          <h4>Featured Products</h4>
          <h2>Featured Products</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
        </div>
        <div className={styles.main_products_products}>
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
