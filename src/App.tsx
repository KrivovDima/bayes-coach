import React from "react";

import styles from "./App.module.scss";
import { MainContent, Menu } from "./components";

export const App: React.FC = () => (
  <div className={styles.App}>
    <Menu />
    <MainContent />
  </div>
);
