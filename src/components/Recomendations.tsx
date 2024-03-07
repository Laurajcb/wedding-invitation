import styles from "../styles/components/Recomendations.module.css";
import Link from 'next/link';

import { FaCloudMoon } from "react-icons/fa";
import { GiBowTie } from "react-icons/gi";
import { RiProhibitedLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";


export default function Recomendations() {
  return (
    <section className={styles.container}>
      <article className={styles.card_container}>
        <h3 className={`${styles.title}`}>
          Niños dulces sueños
        </h3>
        <FaCloudMoon className={styles.icon} />
        <p className={styles.txt}>
          Debido a que tenemos un numero definido de invitados. <br />
          <span className={styles.bold}>
            Solo admitiremos los niños de nuestra familia inmediata y cortejo.
          </span>
        </p>
      </article>
      <article className={styles.card_container}>
        <h3 className={styles.title}>
          Código de vestuario
        </h3>
        <GiBowTie className={styles.icon} />
        <p className={styles.txt}>
          Únanse a nosotros vistiendo de forma
          <span className={styles.underLine}>
            &nbsp;elegante.
          </span>
          <br />
          <span className={styles.span_dress_code}>
            <span className={styles.bold}>
              Restringido el uso</span>de color
            <span className={styles.bold}>
              azul-oscuro/navy
            </span>
          </span>
        </p>
        <div className={styles.btns_container}>
          <Link className={styles.btn_dress} href="/OutfitIdeas">
            Algunas Ideas
          </Link>
        </div>
      </article>
      <article className={styles.card_container}>
        <h3 className={styles.title}>
          Dejémosla brillar
        </h3>
        <RiProhibitedLine className={styles.icon} />
        <p className={styles.txt}>
          Solo hay una regla de vestimenta en nuestra boda.
          <span className={styles.bold}><br />¡Nada de blanco! </span>
        </p>
        <p className={styles.txt}>
          ¡El equipo de seguridad escoltará a los infractores hasta la puerta!
        </p>
      </article>
      <article className={styles.card_container}>
        <h3 className={styles.title}>
          Regalos
        </h3>
        <FaEnvelope className={styles.icon} />
        <p className={styles.txt}>
          Si están pensando en un regalo
          <br />
          <span className={styles.underLine}>
            Habrá lluvia de sobres!
          </span>
        </p>
      </article>
    </section>
  )
}


