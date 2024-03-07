import "../styles/global.css"
import styles from "./page.module.css";
import MainPhoto from "../components/MainPhoto";
import CountDownLogic from "../components/CountDown/Index";
import Information from "@/components/Information";
import Recomendations from "@/components/Recomendations";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <MainPhoto />
      <CountDownLogic />
      <Information />
      <Recomendations />
      <Footer/>
    </main>
  );
}
