"use client"
import React, { useState } from 'react';

import Image from "next/image";
import styles from "@/styles/Information.module.css"
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
  const [isOpen, setIsOpen] = useState(true)

  const toggleModal = () => {
    setIsOpen(!false)
  }

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
          <h2 className={`${styles.title} ${myGreatVibesFont.className}`}>Ceremonia</h2>

          <p className={styles.day_title}>Día</p>
          <span className={styles.span}>
            01 Junio 2024
          </span>

          <button className={styles.place_btn}>Lugar</button>
          <span className={styles.span}>
            <a className={styles.location_btn} href="https://www.google.com/maps/place/Casa/@4.604035,-74.1508868,16.08z/data=!4m6!3m5!1s0x8e3f9f00563dded3:0x48feb1f21559727b!8m2!3d4.6062812!4d-74.1530376!16s%2Fg%2F11vq09tbwv?entry=ttu">
              <ImLocation className={styles.btn} />
              Norte muy norte 200
            </a>
          </span>

          <button onClick={toggleModal}
            className={styles.modal}
          >
            Cómo llegar?
          </button>
        </div>

        <div className={styles.card_content}>
          <GiPartyPopper className={styles.church} />
          <h2 className={`${styles.title} ${myGreatVibesFont.className}`}>
            Fiesta
          </h2>

          <p className={styles.day_title}>Día</p>
          <span className={styles.span}>
            01 Junio 2024
          </span>

          <button className={styles.place_btn}>Lugar</button>
          <span className={styles.span}>
            <a className={styles.location_btn} href="https://www.google.com/maps/place/Casa/@4.604035,-74.1508868,16.08z/data=!4m6!3m5!1s0x8e3f9f00563dded3:0x48feb1f21559727b!8m2!3d4.6062812!4d-74.1530376!16s%2Fg%2F11vq09tbwv?entry=ttu">
              <ImLocation className={styles.btn} />
              Norte muy norte 200
            </a>
          </span>

          <button className={styles.modal}>Confirmar Asistencia</button>
        </div>

      </div>
    </section>
  )
}