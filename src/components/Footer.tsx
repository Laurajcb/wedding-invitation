import styles from "../styles/components/Footer.module.css";
import Image from "next/image";
import { Great_Vibes} from 'next/font/google';

type Great_Vibes = any

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});


export default function Footer() {
  return (
    <section className={styles.container}>
      <section className={styles.info}>
        <Image
          alt="flowers_center"
          src={"/assets/img/flowers_horizontal.png"}
          width={400}
          height={30}
          className={styles.central_flowers_desktop}
        />
        <h1 className={`${myGreatVibesFont.className} ${styles.names}`}>Derly</h1>
        <span className={styles.span}>&</span>
        <h1 className={`${myGreatVibesFont.className} ${styles.names}`}>Giovanny</h1>
      </section>

      <article className={styles.questions}>
        <p className={styles.p}>Inquitides o dudas?</p>
        <span>Llama: 3142444999</span>
      </article>
    </section>
  )
}