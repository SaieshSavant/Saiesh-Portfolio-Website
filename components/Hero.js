// components/Hero.js
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi There, I'm <span className={styles.highlight}>Saiesh Savant</span></h1>
        <p className={styles.subtitle}>I Am Into <span className={styles.highlight}>Web & App Development</span></p>
        <button className={styles.button} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
           About Me
        </button>
        <div className={styles.socialLinks}>
        <a href="https://linkedin.com/in/saieshsavant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com/SaieshSavant" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i className="fab fa-github"></i>
    </a>
    <a href="mailto:saieshsawant70@gmail.com" aria-label="Gmail">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://leetcode.com/u/saieshsawant70" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
      <i className="fab fa-leetcode"></i>
    </a>
        </div>
      </div>
    
    </section>
  );
}

export default Hero;
