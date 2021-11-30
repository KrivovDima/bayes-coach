import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.scss";

export type NavItemType = {
  id: number;
  image: ReactElement<any, any>;
  text: string;
  link: string;
};

export const NavItem: React.FC<NavItemType> = (props) => {
  const { image, text, link } = props;

  return (
    <li className={styles.navItem}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.navItemLink} ${styles.activeLink}`
            : `${styles.navItemLink}`
        }
        to={link}
      >
        <div className={styles.iconWrap}>{image}</div>
        <span className={styles.navItemLinkText}>{text}</span>
      </NavLink>
    </li>
  );
};
