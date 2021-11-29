import React from "react";

import { TabsHeaderItem } from "../TabsHeaderItem";

import styles from "./TabsHeader.module.scss";

import { TabType } from "types/types";

type TabsHeaderPropsType = {
  tabs: TabType[];
  activeTabIndex: number;
  onTabClick: (index: number) => void;
};

export const TabsHeader: React.FC<TabsHeaderPropsType> = (props) => {
  const { tabs, activeTabIndex, onTabClick } = props;

  const handleClick = (index: number): void => {
    onTabClick(index);
  };

  return (
    <div className={styles.TabsHeader}>
      {tabs.map(({ id, text }, index) => (
        <TabsHeaderItem
          key={id}
          text={text}
          active={index === activeTabIndex}
          onClick={() => {
            handleClick(index);
          }}
        />
      ))}
    </div>
  );
};
