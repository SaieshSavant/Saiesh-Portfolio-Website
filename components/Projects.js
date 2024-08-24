import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.project}>
          <h3>Sahara Application (04/2024)</h3>
          <p>
            Developed an app for rapid emergency response using SMS alerts and community engagement.
            Enabled quick mobilization of volunteers for personal, community, and natural disasters.
            Utilized AI to efficiently route messages and allocate volunteers through a Buddy System.
          </p>
        </div>
        <div className={styles.project}>
          <h3>Food Delivery Website (06/2023)</h3>
          <p>
            Developed an online food ordering system for seamless browsing, ordering, and tracking.
            Provided real-time order updates for users and restaurant staff.
            Designed an intuitive interface to simplify the ordering process.
          </p>
        </div>
        <div className={styles.project}>
          <h3>Blog Website (11/2023)</h3>
          <p>
            Created a dynamic blog platform with secure user authentication and full CRUD capabilities.
            Enabled users to register, log in, and manage blog posts efficiently.
            Delivered a user-friendly experience for both content creators and readers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
