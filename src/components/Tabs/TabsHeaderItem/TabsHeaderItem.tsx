import React from "react";

import styles from "./TabsHeaderItem.module.scss";

type TabsHeaderItemPropsType = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export const TabsHeaderItem: React.FC<TabsHeaderItemPropsType> = (props) => {
  const { text, active, onClick } = props;

  const handleOnClick = (): void => {
    onClick();
  };

  return (
    <div
      onClick={handleOnClick}
      className={`${styles.TabsHeaderItem} ${active ? styles.active : ""}`}
      role="presentation"
    >
      <span>{text}</span>
    </div>
  );
};
