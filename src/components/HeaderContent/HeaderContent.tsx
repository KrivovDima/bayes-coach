import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./HeaderContent.module.scss";

import avatar from "images/HeaderContent/avatar.png";
import { HeaderContentNavLinkType } from "types/types";

type HeaderContentPropsType = {
  title: string;
  navList: HeaderContentNavLinkType[];
};

export const HeaderContent: React.FC<HeaderContentPropsType> = (props) => {
  const { title, navList } = props;

  return (
    <div className={styles.HeaderContent}>
      <h3 className={styles.title}>{title}</h3>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navList.map(({ text, route, id }) => (
            <li key={id} className={styles.navItem}>
              <NavLink className={styles.navLink} to={route}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
