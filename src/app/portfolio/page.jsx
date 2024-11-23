import Link from 'next/link';
import styles from './Page.module.css';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      
      <h3 className={styles.selectTitle}>Choose a gallery</h3>

      <div className={styles.items}>
        <Link href='/portfolio/illustrations' className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>

    </div>
  );
}

export default Portfolio;
