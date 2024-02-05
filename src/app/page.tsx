import Image from "next/image";
import styles from "./page.module.css";
import MainPhoto from "../components/MainPhoto";
import CountDownLogic from "../components/CountDown/Index";
import Information from "@/components/Information";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPhoto />
      <CountDownLogic />
      <Information />
    </main>
  );
}
