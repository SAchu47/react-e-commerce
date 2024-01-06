import React, { FC, ReactElement } from 'react';
import styles from './Footer.module.css';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons';
const Footer: FC = (): ReactElement => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer_main_content}>
        <div className={styles.main_content_row}>
          <h3>Get In Touch</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <div>
            <FacebookIcon fill="#23A6F0" width={24} height={24} />
            <TwitterIcon fill="#23A6F0" width={24} height={24} />
            <InstagramIcon fill="#23A6F0" width={24} height={24} />
          </div>
        </div>
        <div className={styles.main_content_row}>
          <h3>Company info</h3>
          <div>
            <div className="links">About Us</div>
            <div className="links">Career</div>
            <div className="links">We are hiring</div>
            <div className="links">Blog</div>
          </div>
        </div>
        <div className={styles.main_content_row}>
          <h3>Features</h3>
          <div>
            <div className="links">Business Marketing</div>
            <div className="links">User Analytic</div>
            <div className="links">Live Chat</div>
            <div className="links">Unlimited Support</div>
          </div>
        </div>
        <div className={styles.main_content_row}>
          <h3>Resources</h3>
          <div>
            <div className="links">IOS & Android</div>
            <div className="links">Watch a Demo</div>
            <div className="links">Customers</div>
            <div className="links">API</div>
          </div>
        </div>
      </div>
      <div className={styles.footer_main_made}>
        <h6>Made With Love By Sachin. All Right Reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
