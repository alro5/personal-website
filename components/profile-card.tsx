import Image from "next/image";
import styles from "../styles/profile-card.module.scss";
import profileImage from "../public/ar.jpg";

const ProfileCard = () => {
  return (
    <aside className={styles.profile}>
      <figure className={styles.profile__image}>
        <Image
          alt="Picture of Alexander Rothschild"
          height="180"
          width="180"
          src={profileImage}
        />
      </figure>
      <p>
        <b>Nice to meet you 👋</b>
      </p>
      <p>
        Below are indicators of how I see myself in the different technologies I
        work with:
      </p>
      <ul>
        <li>
          <b>ReactJS</b>
          <SkillBar value={95} />
        </li>
        <li>
          <b>TypeScript / JavaScript</b>
          <SkillBar value={90} />
        </li>
        <li>
          <b>NextJS</b>
          <SkillBar value={60} />
        </li>
        <li>
          <b>RESTFUL api&apos;s</b>
          <SkillBar value={70} />
        </li>
        <li>
          <b>SCSS</b>
          <SkillBar value={100} />
        </li>
        <li>
          <b>HTML</b>
          <SkillBar value={100} />
        </li>
      </ul>
    </aside>
  );
};

const SkillBar = ({ value }: { value: number }) => {
  return (
    <div className={styles.profile__skill__indicator}>
      <div
        style={{ maxWidth: `${value}%` }}
        className={styles.profile__skill__indicator__value}
      ></div>
    </div>
  );
};

export default ProfileCard;
