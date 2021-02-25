import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../Styles/pages/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container }>
      <Head>
        <title>INICIO | NWL4</title>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
    <h1>NLW</h1>
    <ExperienceBar/>
    
    <section>
      <CountdownProvider>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </CountdownProvider>
    </section>
  </div>
  )
}
