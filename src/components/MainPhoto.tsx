import Image from "next/image";
import styles from "@/styles/MainPhoto.module.css"
import { Great_Vibes, Tangerine } from 'next/font/google';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

type Tangerine = any
type Great_Vibes = any

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const myTangerineFonts: Tangerine = Tangerine({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function MainPhoto() {
  return (
    <article className={styles.container}>
      <section className={styles.container_mobile}>
        <section className={`${styles.welcome_text} ${myGreatVibesFont.className}`}>
          <p className={styles.txt}>Invitación a Nuestro Día Especial</p>
        </section>
        <Image
          alt="top_frame"
          src={"/assets/img/top.png"}
          width={400}
          height={30}
          className={styles.top_frame}
        />

        <Image
          alt="main_picture"
          src={"/assets/img/original.jpg"}
          width={400}
          height={30}
          className={styles.main_picture}
        />

        <div className={styles.img_container}>

          <Image
            alt="button_frame"
            src={"/assets/img/frame2.png"}
            width={400}
            height={30}
            className={styles.button_frame}
          />
          <Image
            alt="flowers_center"
            src={"/assets/img/flowers_horizontal.png"}
            width={400}
            height={30}
            className={styles.central_flowers}
          />
        </div>



      </section>
      <div className={styles.img_container_desktop}>
        <Image
          alt="Main_pic_desktop"
          src={"/assets/img/original.jpg"}
          width={400}
          height={30}
          className={styles.illustration_desktop}
        />

        <Image
          alt="lateral frame"
          src={"/assets/img/shape.png"}
          width={400}
          height={30}
          className={styles.lateral_frame}
        />
      </div>

      <section className={styles.info}>
        <Image
          alt="flowers_center"
          src={"/assets/img/flowers_horizontal.png"}
          width={400}
          height={30}
          className={styles.central_flowers_desktop}
        />
        <p className={styles.date}>01.06.2024</p>
        <h1 className={`${myGreatVibesFont.className} ${styles.names}`}>Derly</h1>
        <span className={styles.span}>&</span>
        <h1 className={`${myGreatVibesFont.className} ${styles.names}`}>Giovanny</h1>

        <section className={styles.quotes_container}>
          <ImQuotesLeft className={styles.quotes} />
          <p>

            Comienza nuestra historia juntos. Únete a nosotros en este día especial para celebrar el amor y la unión. Tu presencia es el mejor regalo. ¡Te esperamos con alegría!
          </p>
          <ImQuotesRight className={styles.quotes} />
        </section>
      </section>
    </article>

  )
}