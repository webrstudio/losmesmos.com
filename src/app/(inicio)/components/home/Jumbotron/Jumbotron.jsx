import styles from "./styles.module.css";
import { FaYoutube } from "react-icons/fa";
import { Particles } from "@/components";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
      <div className={`${styles.jumbotronElements} flexContainer`}>
        <div className={styles.jumbotronImage}>
          <img src="/assets/images/jumbotron.png" />
        </div>
        <div className={styles.jumbotronTitles}>
          <img src="/assets/images/logo.png" alt="MESMOS SHOW" />
          <h1>
            ¡Los payasos{" "}
            <span className={styles.markupLetter}>más virales</span> de México!
          </h1>
          <a
            href="https://www.youtube.com/@losmesmosshow"
            target="_blank"
            className={styles.jumbotronButton}
          >
            <span>Síguenos en YouTube</span> <FaYoutube />
          </a>
        </div>
      </div>
      <Particles />
    </section>
  );
};
