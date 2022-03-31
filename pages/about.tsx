import { NextPage } from "next";
import ProfileCard from "../components/profile-card";
import styles from "../styles/Page.module.scss";

const About: NextPage = () => {
  return (
    <div className={styles.page}>
      <article>
        <h1>About me</h1>
        <section>
          <div className={styles.page__content}>
            <p>
              Hello! My name is Alexander Rothschild, I'm 30 years old, I live
              in Copenhagen, Denmark. I have been doing frontend development
              (professionally) for 8 years now, starting back in 2014.
            </p>
            <p>
              I initially started playing around with some HTML, CSS and
              JavaScript during my education as a Graphic Designer, where I was
              introduced to the basics of frontend.
            </p>
            <p>
              Since then I have explored the world of frontend, which is now a
              lot more extensive than it was back then...
            </p>
            <p>
              I have worked on many different types of frontend assignments
              throughout my career, such as browser optimization for Internet
              Explorer 8, Wordpress, coding newsletters, SPA's (single page
              applications), unit tests, E2E tests, bugfixing, and working with
              javascript libraries such as AngularJS, ReactJS. Fetching and
              sending data to REST api's and more...
            </p>
            <p>The technologies I like to work with now are mainly:</p>
            <ul>
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>NextJS</li>
              <li>RESTFUL api's</li>
              <li>SCSS</li>
            </ul>
            <p>Other technologies worth mentioning:</p>
            <ul>
              <li>Storybook</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <ProfileCard />
        </section>
      </article>
    </div>
  );
};

export default About;
