import React, { FC, ReactElement } from 'react';
import styles from './Header.module.css';
import { AccountIcon, CartIcon, LikeIcon, SearchIcon } from '../../icons';

/*
    TO DO
    1. Interface
    2. Links and routing
    3. Number of notification condition based on login
*/

const Header: FC = (): ReactElement => {
  return (
    <div className={styles.hero_main}>
      <div className={styles.hero_main_pages}>
        <h3>Rohini Silks</h3>
        <div className={styles.main_pages_links}>
          <div className="links">Home</div>
          <div className="links">Shop</div>
          <div className="links">About</div>
          <div className="links">Blog</div>
          <div className="links">Contact</div>
        </div>
      </div>
      <div className={styles.hero_main_buttons}>
        <div className={styles.main_buttons_button}>
          <AccountIcon fill="#23A6F0" width={12} height={12} />
          <div className="links">Login / Register</div>
        </div>
        <div className={styles.main_buttons_button}>
          <SearchIcon fill="#23A6F0" width={16} height={16} />
        </div>
        <div className={styles.main_buttons_button}>
          <CartIcon fill="#23A6F0" width={16} height={16} />
          <div>1</div>
        </div>
        <div className={styles.main_buttons_button}>
          <LikeIcon fill="#23A6F0" width={16} height={16} />
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
