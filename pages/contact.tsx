import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Page.module.scss";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Alexander Rothschild - Frontend developer</title>
        <meta
          name="description"
          content="About - frontend developer Alexander Rothschild"
        />
      </Head>
      <div className={styles.page}>
        <article>
          <h1>Say hello</h1>
          <div className={styles.page__content}>
            <p>You can find me in Copenhagen, Denmark.</p>
            <p>
              And digitally here{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alexander-rothschild-b401bb40/"
              >
                LinkedIn
              </a>{" "}
              / <a href="mailto:alek-12@hotmail.com">E-mail</a>.
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Contact;
