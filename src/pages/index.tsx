import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
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
        <Countdown/>
      </div>
      <div>

      </div>
    </section>
  </div>
  )
}
