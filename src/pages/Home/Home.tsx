import React, { FC, ReactElement } from 'react';
import {
  Category,
  FeaturedProducts,
  Features,
  FlashHeader,
  Footer,
  Header,
  Hero,
} from '../../components';
import styles from './Home.module.css';

const Home: FC = (): ReactElement => {
  return (
    <div className={styles.home_main}>
      <div className={styles.home_main_landing}>
        <div className={styles.main_landing_header}>
          <FlashHeader />
          <Header />
        </div>
        <div className={styles.main_landing_hero}>
          <Hero />
        </div>
      </div>
      <Category />
      <FeaturedProducts />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
