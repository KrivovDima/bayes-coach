import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";

import logoApp from "images/MenuImage/logoApp.svg";

export const Menu: React.FC = () => (
  <div className={styles.Menu}>
    <div className={styles.logo}>
      <NavLink to="/">
        <img src={logoApp} alt="logo" />
      </NavLink>
      <nav className={styles.nav}>
        <h5>Меню</h5>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="teamOverview">
              <img src="" alt="" />
              <span className={styles.navLinkText}>Обзор команды</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="matchReview">
              <img src="" alt="" />
              <span className={styles.navLinkText}>Обзор матча</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="playerComparison">
              <img src="" alt="" />
              <span className={styles.navLinkText}>Сравнение игроков</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="report">
              <img src="" alt="" />
              <span className={styles.navLinkText}>Отчеты</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.currentClub}>
        <h5 className={styles.currentClubTitle}>Текущий клуб</h5>
        <div className={styles.currentClubInner}>
          <img src="" alt="currentClub" />
          <div className={styles.currentClubName}>Спартак Москва</div>
        </div>
        <div className={styles.selectedClubs}>
          <h5 className={styles.selectedClubsTitle}>Избранные клубы</h5>
          <ul className={styles.selectedClubsList}>
            <li className={styles.selectedClubsItem}>
              <img src="" alt="selectedClubs" />
              <span className={styles.selectedClubsItemText}>
                Спартак Москва
              </span>
            </li>
            <li className={styles.selectedClubsItem}>
              <img src="" alt="selectedClubs" />
              <span className={styles.selectedClubsItemText}>Сочи</span>
            </li>
            <li className={styles.selectedClubsItem}>
              <img src="" alt="selectedClubs" />
              <span className={styles.selectedClubsItemText}>Краснодар</span>
            </li>
          </ul>
        </div>
        <div className={styles.selectNewClub}>
          <a className={styles.selectNewClubLink} href="/">
            Выбрать другой клуб
          </a>
        </div>
      </div>
      <div className={styles.feedback}>
        <a className={styles.feedbackLink} href="/">
          Дать обратную связь
        </a>
      </div>
    </div>
  </div>
);
