import React, { FC, ReactElement } from 'react';
import styles from './Hero.module.css';

/*
    TO DO:
    1. Create interfaces
    2. Send images, heading and links as props
*/

const Hero: FC = (): ReactElement => {
  return (
    <div className={styles.hero_main}>
      <div className={styles.hero_main_one}>
        <div className={styles.two_container_box}>
          <div className={styles.two_container_details}>
            <h6>5 Items</h6>
            <h3>FURNITURE</h3>
            <h6>Read More</h6>
          </div>
          <img src="product1.jpg" alt="" />
        </div>
      </div>
      <div className={styles.hero_main_two}>
        <div className={styles.main_two_container}>
          <div className={styles.two_container_box}>
            <div className={styles.two_container_details}>
              <h6>5 Items</h6>
              <h3>FURNITURE</h3>
              <h6>Read More</h6>
            </div>
            <img src="product2.jpg" alt="" />
          </div>
          <div className={styles.two_container_box}>
            <div className={styles.two_container_details}>
              <h6>5 Items</h6>
              <h3>FURNITURE</h3>
              <h6>Read More</h6>
            </div>
            <img src="product2.jpg" alt="" />
          </div>
        </div>
        <div className={styles.main_two_container}>
          <div className={styles.two_container_box}>
            <div className={styles.two_container_details}>
              <h6>5 Items</h6>
              <h3>FURNITURE</h3>
              <h6>Read More</h6>
            </div>
            <img src="product2.jpg" alt="" />
          </div>
          <div className={styles.two_container_box}>
            <div className={styles.two_container_details}>
              <h6>5 Items</h6>
              <h3>FURNITURE</h3>
              <h6>Read More</h6>
            </div>
            <img src="product2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
