import React from "react";

import styles from "./SelectedClubsItem.module.scss";

export type SelectedClubsItemType = {
  id: number;
  image: string;
  text: string;
};

export const SelectedClubsItem: React.FC<SelectedClubsItemType> = (props) => {
  const { image, text } = props;

  return (
    <li className={styles.selectedClubsItem}>
      <div className={styles.imgWrap}>
        <img src={image} alt="selectedClubs" />
      </div>
      <span className={styles.selectedClubsItemText}>{text}</span>
    </li>
  );
};
