import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | Alexander Rothschild - Frontend developer</title>
        <meta
          name="description"
          content="Welcome to the personal website for frontend developer Alexander Rothschild"
        />
      </Head>
      <div className={styles.home}>
        <div className={styles.home__hero}>
          <h1>
            <span>Frontend Developer</span>{" "}
            <span>with a passion for design</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
