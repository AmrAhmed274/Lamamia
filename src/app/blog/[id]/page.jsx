import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

async function getData(id) {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: 'no-store'})

  if(!response.ok) {
    return notFound()
  }

  return response.json()
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>

    <div className={styles.top}>

      <div className={styles.info}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.desc}>
          {data.desc}
        </p>
        <div className={styles.author}>
          <Image
            src={data.img}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>John Doe</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={data.img}
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>

    </div>

    <div className={styles.content}>
      <p className={styles.text}>
       {data.content}
      </p>
    </div>
  
  </div>
  );
}

export default BlogPost;
