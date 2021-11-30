import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";

import styles from "../Menu.module.scss";

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
      <NavLink to={link}>
        {image}
        <span className={styles.navLinkText}>{text}</span>
      </NavLink>
    </li>
  );
};
