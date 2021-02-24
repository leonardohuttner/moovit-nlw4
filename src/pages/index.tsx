import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import {CompletedChallenges} from "../components/CompletedChallenges"
import styles from '../Styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container }>
    <h1>NLW</h1>
    <ExperienceBar/>
    <section>
      <div>
        <Profile/>
        <CompletedChallenges/>
      </div>
      <div>

      </div>
    </section>
  </div>
  )
}
