"use client"
import React from 'react';

import Image from "next/image";
import styles from "@/styles/components/Information.module.css"
import MySVGIcon from "../../public/assets/svg/img_lineas01.svg";

import { Great_Vibes } from 'next/font/google';
import { PiChurchThin } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { GiPartyPopper } from "react-icons/gi";

type Great_Vibes = any

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});


export default function Information() {

  return (
    <section className={styles.container}>
      <article className={styles.lines_container}>
        <Image
          src={MySVGIcon}
          alt="SVG Icon"
          className={styles.lines} />
      </article>

      <div className={styles.card}>
        <div className={styles.card_content}>
          <PiChurchThin className={styles.church} />
          <h3 className={`${styles.title} ${myGreatVibesFont.className}`}>
            Ceremonia
          </h3>

          <p className={styles.day_title}>Día</p>
          <span className={styles.span}>
            15 Junio 2024
          </span>

          <p className={styles.day_title}>Hora</p>
          <span className={styles.span}>
            4:30pm
          </span>

          <button className={styles.place_btn}>Lugar</button>
          <span className={styles.span}>
            <a className={styles.location_btn} href="https://www.google.com/maps/place/Parroquia+Santa+%C3%81gueda/@4.6058572,-74.1144839,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f99464be90113:0xe03d083ffd273de3!8m2!3d4.6058572!4d-74.111909!16s%2Fg%2F1hf3bg6d8?entry=ttu">
              <ImLocation className={styles.btn} />
              Parroquia Santa Águeda
            </a>
          </span>

        </div>
        <div className={styles.card_content}>
          <GiPartyPopper className={styles.church} />
          <h3 className={`${styles.title} ${myGreatVibesFont.className}`}>
            Recepción
          </h3>

          <p className={styles.day_title}>Día</p>
          <span className={styles.span}>
            01 Junio 2024
          </span>

          <p className={styles.day_title}>Hora</p>
          <span className={styles.span}>
            7:00pm
          </span>

          <button className={styles.place_btn}>Lugar</button>
          <span className={styles.span}>
            <a className={styles.location_btn} href="https://www.google.com/maps/place/Casa+de+Banquetes+Absolut/@4.599719,-74.1082633,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f993c85f04853:0x2652b16e2c3b11ec!8m2!3d4.599719!4d-74.105683!16s%2Fg%2F11bycg8nmt?entry=ttu">
              <ImLocation className={styles.btn} />
              Casa de Banquetes Absolut
            </a>
          </span>

          <a href='https://wa.me/573125022143?text=Hola%20familia%20Giraldo%20Lesmes,%20con%20gusto%20[Escribir%20los%20nombres%20de%20los%20integrantes%20que%20asistirán]%20Estaremos%20allí%20celebrando%20con%20ustedes%20este%20día%20especial%20!!!'>
            <button className={styles.map}>Confirmar Asistencia</button>
          </a>
        </div>

      </div>
    </section>
  )
}