import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyalatha</h1>
        <p className={styles.description}>
          I'm a Frontend Web Developer specializing in JavaScript, React.js, and Tailwind CSS, passionate about creating responsive and user-friendly web applications.<br></br> Reach out if you'd like to know more!
        </p>
        <a href="mailto:priyalatha24.2002@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
