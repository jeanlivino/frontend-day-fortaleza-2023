import Image from 'next/image';
import styles from './page.module.scss';
import InstagramIcon from './instagram.svg';
import WhatsAppIcon from './whatsapp.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src='/logo-white.svg'
        alt='FrontEnd Day - Fortaleza 2023'
        width={1275}
        height={691}
      />
      <h1 style={{ color: '#fff' }}>Em breve</h1>
      <div className={styles.icons}>
        <a href='https://www.instagram.com/frontendce/' target='_blank'>
          <Image src='/instagram.svg' alt='Instagram' width={24} height={24} />
        </a>
        <a
          href='https://chat.whatsapp.com/KjuHQ55RV6FBERixk5eg6g'
          target='_blank'
        >
          <Image src='/whatsapp.svg' alt='WhatsApp' width={24} height={24} />
        </a>
      </div>
    </main>
  );
}
