import React from "react";

import { Route, Routes } from "react-router-dom";

import styles from "./MainContent.module.scss";

import {
  MatchReview,
  PlayerComparison,
  Report,
  TeamOverview,
} from "components";

export const MainContent: React.FC = () => (
  <div className={styles.MainContent}>
    <Routes>
      <Route path="teamOverview" element={<TeamOverview />} />
      <Route path="matchReview/*" element={<MatchReview />} />
      <Route path="playerComparison" element={<PlayerComparison />} />
      <Route path="report" element={<Report />} />
    </Routes>
  </div>
);
