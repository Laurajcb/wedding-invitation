import dressCode from '../../public/assets/img/formal.png'
import men1 from '../../public/assets/img/m1.png'
import men2 from '../../public/assets/img/m2.png'
import women1 from '../../public/assets/img/w1.png'
import women2 from '../../public/assets/img/w2.png'
import flowers2 from '../../public/assets/img/flowers3.png'

import Image from 'next/image'

import "../styles/global.css"
import styles from "@/styles/components/OutfitIdeas.module.css"
import { Great_Vibes } from 'next/font/google';
import Footer from "@/components/Footer";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from 'next/link'


type Great_Vibes = any

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function OutfitIdeas() {
  return (
    <section className={styles.container}>
      <Link href="./" className={styles.arrow}>
        <IoArrowBackCircleSharp className={styles.arrow} />
      </Link>


      <h2 className={`${styles.main_title} ${myGreatVibesFont.className}`}>
        Código de vestimenta
      </h2>
      <article className={styles.img_dtop}>
        <div>
          <Image src={dressCode} alt="Dresscode" className={styles.main_img} />
        </div>

        <article className={styles.ideas_container}>
          <div className={styles.ideas}>
            <h3 className={styles.ideas_m}>
              Ellos:
            </h3>
            <ul className={styles.list_container}>
              <li>Traje formal</li>
              <li>No Azul oscuro</li>
              <li>No Navy</li>
              <li>Corbata opcional</li>
              <li>Zapatos</li>
              <li>Opcional zapatillas</li>
            </ul>
          </div>

          <div className={styles.ideas}>
            <h3 className={styles.ideas_w}>Ellas:</h3>
            <ul className={styles.list_container}>
              <li>Vestido largo</li>
              <li>No blanco</li>
              <li>No Azul oscuro</li>
              <li>No Navy</li>
              <li>Accesorios brillantes</li>
              <li>Tacones o sandalias</li>
            </ul>
          </div>
        </article>
      </article>


      <p className={` ${myGreatVibesFont.className} ${styles.p}`}>Ideas Hombres: </p>
      <div className={`${styles.imgs_ei} ${styles.margin}`}>
        <Image src={men1} alt='ideasMen' className={styles.img} />
        <Image src={men2} alt='ideasMen' className={styles.img} />
      </div>

      <p className={` ${myGreatVibesFont.className} ${styles.p} `}>Ideas Mujeres: </p>
      <div className={`${styles.imgs_ei} ${styles.margin}`}>
        <Image src={women1} alt='ideaswomen' className={styles.img} />
        <Image src={women2} alt='ideaswomen' className={`${styles.img}`} />
      </div>
      <Footer />

    </section>
  )
}