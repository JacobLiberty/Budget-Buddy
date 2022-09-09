import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>Contact Me:</p>
      <a href="https://github.com/JacobGit3/Budget-Buddy">
        <img
          src="/github.png"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Github"
        />
      </a>
      <a href="https://www.linkedin.com/in/jacobtliberty/">
        <img
          src="/linkedin.png"
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Linkedin"
        />
      </a>
      <p>Powered by Gadget</p>
    </div>
  );
};

export default Footer;
