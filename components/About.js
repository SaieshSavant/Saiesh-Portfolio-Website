// components/About.js
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.description}>
        I am Saiesh Sawant, a passionate web developer with experience in building modern web applications. I love exploring new technologies and applying them to solve real-world problems.
      </p>
    </section>
  );
};

export default About;
