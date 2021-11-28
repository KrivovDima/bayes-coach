import React from "react";

import { Route, Routes } from "react-router-dom";

import { HeaderContent } from "../HeaderContent";

import styles from "./MatchReview.module.scss";

import { DetailedStatistics } from "components";
import { HeaderContentNavLinkType } from "types/types";

export const MatchReview: React.FC = () => {
  const matchReviewRoutes = {
    summary: "summary",
    compositions: "compositions",
    detailedStatistics: "detailedStatistics",
    matchAnalysis: "matchAnalysis",
  };

  const navList: HeaderContentNavLinkType[] = [
    { id: 1, route: matchReviewRoutes.summary, text: "Сводка" },
    { id: 2, route: matchReviewRoutes.compositions, text: "Составы" },
    {
      id: 3,
      route: matchReviewRoutes.detailedStatistics,
      text: "Подробная статистика",
    },
    { id: 4, route: matchReviewRoutes.matchAnalysis, text: "Анализ матча" },
  ];

  return (
    <div className={styles.MatchReview}>
      <HeaderContent title="Обзор матча" navList={navList} />
      <div className={styles.inner}>
        <Routes>
          <Route
            path={matchReviewRoutes.detailedStatistics}
            element={<DetailedStatistics />}
          />
        </Routes>
      </div>
    </div>
  );
};
