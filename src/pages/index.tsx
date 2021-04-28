import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext'
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengeContext'

import styles from '../Styles/pages/Home.module.css'
import Head from 'next/head'

interface HomeProps {
  level:number,
  currentExperience:number,
  challengeCompleted:number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengeCompleted}
      >
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
  </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

const { level,currentExperience,challengeCompleted } = ctx.req.cookies
  return {
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}