import Image from "next/image";
import styles from "@/styles/CountDown.module.css"
import { Time } from "@/types"
import WavesSvg from "../../../public/assets/svg/img_ondas02.svg"

type CountDownProps = {
  time: Time
}

export default function CountDown(props: CountDownProps) {
  const time = props.time

  if (!time) {
    return <p>La informacion esta cargando</p>;
  }

  return (
    <section className={styles.container}>
      <Image src={WavesSvg} alt="svgIcon" className={styles.waves}/>
      
      <article className={styles.container_count}>
        <Image
          alt="countdown frame"
          width={300}
          height={400}
          src={"/assets/img/countDown1.png"}
          className={styles.frame}
        />

        <section className={styles.time_container}>
          <div className={styles.time_item}>
            <span className={styles.time_number}>
              {`${time.days}`}
            </span>
            <p className={styles.time_description}>DIAS</p>
          </div>

          <div className={styles.time_item}>
            <span className={styles.time_number}>
              {`${time.hours}`}
            </span>
            <p className={styles.time_description}>HS</p>
          </div>
          <div className={styles.time_item}>
            <span className={styles.time_number}>
              {`${time.minutes}`}
            </span>
            <p className={styles.time_description}>MIN</p>
          </div>
          <div className={styles.time_item}>
            <span className={styles.time_number}>
              {`${time.seconds}`}
            </span>
            <p className={styles.time_description}>SEG</p>
          </div>
        </section>

      </article>
    </section>
  )
}