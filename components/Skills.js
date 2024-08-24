import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Technical Skills</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Languages</h3>
          <p>Java, C, Python, HTML, CSS</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Frameworks</h3>
          <p>ReactJS, NodeJS, ExpressJS, Flutter, MongoDB, FastAPI</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Developer Tools</h3>
          <p>Android Studio, Docker, VSCode, Git/Github, Postman, Jupyter Notebook</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Soft Skills</h3>
          <p>Problem Solving, Team Work</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
