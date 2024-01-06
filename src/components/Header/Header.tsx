import React, { FC, ReactElement, useState } from 'react';
import styles from './Header.module.css';
import { AccountIcon, CartIcon, LikeIcon, SearchIcon } from '../../icons';

/*
    TO DO
    1. Interface
    2. Links and routing
    3. Number of notification condition based on login
*/

const Header: FC = (): ReactElement => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.hero_main}>
      <div className={styles.hero_main_pages}>
        <h3>Rohini Silks</h3>
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div>
          <ul className={styles.main_pages_links}>
            <li className="links">Home</li>
            <li className="links">Shop</li>
            <li className="links">About</li>
            <li className="links">Blog</li>
            <li className="links">Contact</li>
          </ul>
          <ul
            className={`${
              !isNavExpanded
                ? `${styles.main_pages_links_mobile}`
                : `${styles.main_pages_links_mobile_hidden}`
            }`}
          >
            <li className="links">Home</li>
            <li className="links">Shop</li>
            <li className="links">About</li>
            <li className="links">Blog</li>
            <li className="links">Contact</li>
          </ul>
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
