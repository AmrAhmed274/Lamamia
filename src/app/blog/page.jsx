import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

async function getData() {
  const response = await fetch('http://localhost:3000/api/posts', {cache: 'no-store'})

  if(!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}


const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map(item => (
      <Link key={item._id} href={`/blog/${item._id}`} className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}
      
  </div>
  );
}

export default Blog;
