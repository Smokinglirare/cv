import React from "react";
import styles from "./Experience.module.css";
import { AiFillPhone } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";

function experience() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <span className={styles.icons}>
          <AiFillPhone /> <span className={styles.number}>+46 709 509 387</span>
        </span>
        <div className={styles.border}></div>
        <span className={styles.icons}>
          <ImEarth />{" "}
          <span className={styles.number2}>Sebastian.thorneus@gmail.com</span>
          <a href="https://torneusportfolio.vercel.app/" className={styles.number2}>
          Portfolio
          </a>
        </span>
        <div className={styles.border}></div>
        <span className={styles.icons}>
          <GiPositionMarker />{" "}
          <span className={styles.number}>Spannvägen 11 16835 Bromma</span>
        </span>
        <div className={styles.border}></div>
      </div>
      <div className={styles.education}>Utbildning</div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>
          Frontend developer - Changemaker Educations
        </h2>
        <h3 className={styles.time}>2021 - 2023</h3>
        <p className={styles.bread}>
          Frontend utbildning med fokus på Javascript och ReactJS, men också en
          tre månaders kurs inom backend och NodeJS. Gått kurser inom UI och UX
          design samt projektmetodik, men även digital marknadsföring,
          versionshantering och webbpublicering.
          <br></br>
          <br></br>
          Följande kurser har jag slutfört:
          <br></br>
          <br></br>
          Frontend-programmering <strong>80 YHP</strong>
          <br></br>
          Webb- och mobilapplikationsutveckling <strong>80 YHP</strong>
          <br></br>
          Javascript-ramverk <strong>50 YHP</strong>
          <br></br>
          Webbserver och databaser <strong>50 YHP</strong>
          <br></br>
          Versionshantering <strong>10 YHP</strong>
          <br></br>
          Webbpublicering <strong>10 YHP</strong>
          <br></br>
          UX, Design och Layout <strong>10 YHP</strong>
          <br></br>
          Projektmetodik inom IT <strong>10 YHP</strong>
          <br></br>
          Digital marknadsföring <strong>10 YHP</strong>
          <br></br>
          Examensarbete <strong>20 YHP</strong>
          <br></br>
         LIA - Lärande i
          Arbete <strong>120YHP</strong>
        </p>
        <h2 className={styles.title}>
          Slutbetyg Gymnasiet
        </h2>
      </div>
      <div className={styles.experience}>
        <h1 className={styles.experienceText}>Erfarenhet</h1>
      </div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>Gatuarbetare - Svevia</h2>
        <h3 className={styles.time}>2023 - pågående</h3>
        <h4 className={styles.place}>Stockholm</h4>
        <p className={styles.bread}>
          Håller Kungsholmens och Östermalms gator rena. Kör maskiner som borstar gatorna, blåser löv vid behov och ser över gatorna efter skräp.
        </p>
      </div>
      <div className={styles.border}></div>
        <h2 className={styles.title}>Frontend utvecklare - Kvantic</h2>
        <h3 className={styles.time}>2023</h3>
        <h4 className={styles.place}>Stockholm</h4>
        <p className={styles.bread}>
          Har haft en fem månaders LIA hos Kvantic i Stockholm där jag byggt ett
          fullstack verktyg i NextJS och NodeJS där man kan skapa bildannonser i
          stor skala med hjälp av mallar och datatabeller. Har också tagit en start på en
          webbshop åt Kvantic med hjälp av NextJS och Strapi som CMS.{" "}
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
      <h2 className={styles.title}>
      <a className={styles.link}
            href="http://www.kentwahlbeckartstore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            KentWahlbeckArtstore.com
          </a>
          </h2>
        <h3 className={styles.time}>2023</h3>
        <p className={styles.bread}>
          Byggt en Webbshop åt konstnären Kent Wahlbeck med hjälp av MedusaJS.
          Frontend byggd i NextJS och TailwindCSS.{" "}
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>
          <a className={styles.link}
            href="http://www.thornescoloringbooks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThornesColoringBooks.com
          </a>
        </h2>
        <h3 className={styles.time}>2023</h3>
        <p className={styles.bread}>
          Startade ett projekt där jag gör målarböcker med hjälp av AI och
          säljer via Amazon. Byggde en webbsida för det projektet i NextJS, med
          vanilla CSS.
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}> <a className={styles.link}
            href="http://www.aikstatistik.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AIKstatistik.se
          </a></h2>
        <h3 className={styles.time}>2023</h3>
        <p className={styles.bread}>
          Mitt slutprojekt under utbildningen hos Changemaker Educations. REST
          API som hämtar in data från API football och presenterar den datan.
          Ett ReactJS project med vanilla CSS.{" "}
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>Lastbilschaufför - Postnord</h2>
        <h3 className={styles.time}>2021 - 2023</h3>
        <h4 className={styles.place}>Kiruna</h4>
      </div>
      <br></br>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>Startat uthyrningsverksamhet i Jukkasjärvi</h2>
        <h3 className={styles.time}>2020</h3>
        <h4 className={styles.place}>Jukkasjärvi</h4>
      </div>
      <br></br>
      <div className={styles.experienceBox}>
        <h2 className={styles.title}>Lastbilschaufför - Home2You</h2>
        <h3 className={styles.time}>2009 - 2019</h3>
        <h4 className={styles.place}>Stockholm</h4>
      </div>

      <div className={styles.border}></div>
      <div className={styles.navbar}>
        {" "}
      </div>
    </div>
  );
}

export default experience;
