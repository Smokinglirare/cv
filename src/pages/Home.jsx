import React from "react";
import styles from "./Home.module.css";
import { TbOctagon } from "react-icons/tb";
import profile from "../images/Sebbe2.png";
import Experience from "./Experience";
import SkillBar from "../components/SkillBar";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.leftSide}>
          <h1 className={styles.firstName}>Sebastian</h1>
          <h1 className={styles.lastName}>Torneus</h1>
          <span className={styles.octagon}>
            <TbOctagon />
            <TbOctagon />
            <TbOctagon />
            <TbOctagon />
          </span>{" "}
          <span className={styles.title}>Frontend-utvecklare</span>
          <div className={styles.imageDiv}>
            {" "}
            <img alt="profil" className={styles.image} src={profile}></img>
          </div>
          <h2 className={styles.me}>Om mig</h2>
          <div className={styles.border}></div>
          <p className={styles.bread}>
            Jag är en engagerad och prestigelös person som just nu utbildar mig
            inom frontend-utveckling och senaste åren lärt mig UI och UX design.
            Jag har arbetat mycket med CSS och Javascript, framför allt på
            slutet mycket i ReactJS. Jag gillar att grotta ner mig i detaljer
            och lära mig nya saker.{" "}
          </p>
          <h2 className={styles.me}>Kunskaper</h2>
          <div className={styles.skills}>
            <SkillBar skill="Javascript" level={80} />
            <SkillBar skill="React" level={80} />
            <SkillBar skill="CSS" level={80} />
            <SkillBar skill="Typescript" level={60} />
            <SkillBar skill="Node" level={60} />
            <SkillBar skill="Git" level={80} />
            <SkillBar skill="Redux" level={80} />
            <SkillBar skill="Docker" level={70} />
            <SkillBar skill="REST API" level={80} />
          </div>
        </div>

        <div className={styles.rightSide}>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Home;
