import React, { FC, ReactElement } from 'react';
import styles from './Features.module.css';
import { CardIcon } from '../../icons';

/*
  TO DO
  1. Interface
*/

const data = [
  {
    featureIcon: 'card',
    featureName: 'Easy to use',
    featureDescription:
      'Things on a very small scale behave like nothing that you have any direct experience about.',
  },
  {
    featureIcon: 'card',
    featureName: 'Easy to use',
    featureDescription:
      'Things on a very small scale behave like nothing that you have any direct experience about.',
  },
  {
    featureIcon: 'card',
    featureName: 'Easy to use',
    featureDescription:
      'Things on a very small scale behave like nothing that you have any direct experience about.',
  },
  {
    featureIcon: 'card',
    featureName: 'Easy to use',
    featureDescription:
      'Things on a very small scale behave like nothing that you have any direct experience about.',
  },
];

const Features: FC = (): ReactElement => {
  return (
    <div className={styles.features_main}>
      <div className={styles.features_main_header}>
        <h6>Practice Advice</h6> <h2>Featured Products</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className={styles.features_main_content}>
        {data.map((item, index) => {
          return (
            <div className={styles.main_content_heading} key={index}>
              <div className={styles.content_heading_icon}>
                <CardIcon fill="white" width={24} height={24} />
              </div>
              <div>
                <h3>{item.featureName}</h3>
                <p>{item.featureDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
