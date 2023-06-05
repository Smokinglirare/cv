import React from 'react';
import styles from './SkillBar.module.css'; 

function SkillBar({ skill, level }) {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillName}>{skill}</div>
      <div className={styles.skillBar}>
        <div className={styles.skillLevel} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default SkillBar;