import Button from '@/components/button/Button';
import styles from './Page.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'lamamia Contact page',
  description: 'This is the description',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Let's Keep in Touch </h3>
      <div className={styles.content}>
        
        <div className={styles.imgContainer}>
          <Image 
            src='/contact.png'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}/>
          <input type="text" placeholder='email' className={styles.input}/>
          <textarea className={styles.textArea} placeholder='message' cols="30" rows="8"></textarea>
          <Button url='#' text='Send'/>
        </form>

      </div>
    </div>
  );
}

export default Contact;
