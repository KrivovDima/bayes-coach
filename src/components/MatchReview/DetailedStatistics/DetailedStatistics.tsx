import React from "react";

import styles from "./DetailedStatistics.module.scss";

import { Attack, BtScore, Defense, Pass, Tabs } from "components";
import { TabType } from "types/types";

export const DetailedStatistics: React.FC = () => {
  const tabsData: TabType[] = [
    { id: 1, text: "Атака", renderContent: () => <Attack /> },
    { id: 2, text: "Оборона", renderContent: () => <Defense /> },
    { id: 3, text: "Пасы", renderContent: () => <Pass /> },
    { id: 4, text: "BT Score", renderContent: () => <BtScore /> },
  ];

  return (
    <div className={styles.DetailedStatistics}>
      <Tabs tabs={tabsData} />
    </div>
  );
};
