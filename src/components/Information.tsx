"use client"
import React, { useState } from 'react';

import Image from "next/image";
import styles from "@/styles/Information.module.css"
import MySVGIcon from "../../public/assets/svg/img_lineas01.svg";

import { Great_Vibes } from 'next/font/google';
import { PiChurchThin } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { GiPartyPopper } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { BsBusFront } from "react-icons/bs";

type Great_Vibes = any

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});


export default function Information() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsOpen(!isOpen)
  };

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

          <button onClick={handleClick}
            className={styles.map}
          >
            Cómo llegar ?
          </button>
        </div>
        {
          isOpen &&
          <article className={styles.modalOverlay}>
            <section className={styles.modal_container}>
              <button className={styles.closeBtn_container} onClick={handleClick}>
                <IoCloseSharp />
              </button>
              <div className={styles.icon_container}>
                <BsBusFront className={styles.bus} />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente id assumenda pariatur eaque, velit aliquid reprehenderit et mollitia itaque saepe hic facere! Esse, libero illo cum debitis error vitae?</p>
            </section>
          </article>

        }

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

          <a href='https://wa.me/573045979465?text=Hola%20familia%20Giraldo%20Lesmes,%20con%20gusto%20[Escribir%20los%20nombres%20de%20los%20integrantes%20que%20asistirán]%20Estaremos%20allí%20celebrando%20con%20ustedes%20este%20día%20especial%20!!!'>
            <button className={styles.map}>Confirmar Asistencia</button>
          </a>
        </div>

      </div>
    </section>
  )
}