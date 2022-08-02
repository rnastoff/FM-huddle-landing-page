import styles from './HuddleLandingPage.module.css';

import Card from './Card';

import logo from '../images/logo.svg';
import illustration from '../images/illustration-mockups.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const HuddleLandingPage = () => {
  return (
    <Card>
      <div className={styles.logo}>
        <img src={logo} alt="Huddle Logo" />
      </div>

      <div className={styles.main}>
        <div className={styles.illustration}>
          <img src={illustration} alt="Illustration" />
        </div>

        <div className={styles.build}>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-images the way we build communities. You have
            a voice, but so does your audience. Create connections with
            your users as you engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <a href="#" className={styles.smIcon}>
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" className={styles.icon} />
        </a>
        <a href="#" className={styles.smIcon}>
          <FontAwesomeIcon icon="fa-brands fa-twitter" className={styles.icon} />
        </a>
        <a href="#" className={styles.smIcon}>
          <FontAwesomeIcon icon="fa-brands fa-instagram" className={styles.icon} />
        </a>
      </div>

    </Card>
  )
}

export default HuddleLandingPage;

