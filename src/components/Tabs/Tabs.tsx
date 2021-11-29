import React, { useState } from "react";

import styles from "./Tabs.module.scss";
import { TabsHeader } from "./TabsHeader";

import { TabType } from "types/types";

type TabsPropsType = {
  tabs: TabType[];
};

export const Tabs: React.FC<TabsPropsType> = (props) => {
  const { tabs } = props;

  const defaultActiveTabIndex = 3;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);

  const handleTabClick = (index: number): void => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.Tabs}>
      <div className={styles.TabsHeaderContainer}>
        <TabsHeader
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          onTabClick={handleTabClick}
        />
      </div>
      <div className={styles.TabsContent}>
        {tabs[activeTabIndex].renderContent()}
      </div>
    </div>
  );
};
