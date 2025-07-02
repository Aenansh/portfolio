'use client';

import styles from './styles/background.module.css';

const AnimatedBackground = () => {
  return (
    <div className={`fixed inset-0 -z-10 ${styles.space}`}>
      <div className={styles.stars} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
      <div className={`${styles.shootingStar} left-1/4 top-1/4`} />
      <div className={`${styles.shootingStar} left-3/4 top-1/3`} style={{ animationDelay: '1s' }} />
      <div className={`${styles.shootingStar} left-2/4 top-2/3`} style={{ animationDelay: '2s' }} />
      <div className={`${styles.glowingCircle} left-1/4 top-1/4`} />
      <div className={`${styles.glowingCircle} right-1/4 bottom-1/4`} style={{ animationDelay: '2s' }} />
      <div className={`${styles.glowingCircle} left-2/3 top-2/3`} style={{ animationDelay: '1s' }} />
      <div className={`${styles.rainbowBall} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} />
    </div>
  );
};

export default AnimatedBackground; 