import React, { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";

import styles from "./BtScore.module.scss";
import { ScoreChart } from "./ScoreChart/ScoreChart";

import { PlayerType } from "store/reducers/btScoreReducer";
import { RootReducerType } from "store/store";

export const BtScore: React.FC = () => {
  const players = useSelector<RootReducerType, PlayerType[]>(
    (state) => state.btScore.players
  );

  const firstPlayerIndex = 0;
  const defaultCurrentPlayerId = players[firstPlayerIndex].playerId;
  const [currentPlayerId, setCurrentPlayerId] = useState(
    defaultCurrentPlayerId
  );

  const changeCurrentPlayerId = (playerId: string): void => {
    setCurrentPlayerId(playerId);
  };

  const handleOnChangeRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    changeCurrentPlayerId(event.currentTarget.value);
  };

  return (
    <div className={styles.BtScore}>
      <div className={styles.players}>
        <h4>Выбрать игрока</h4>
        {currentPlayerId}
        <ul>
          {players.map(({ playerId, fullName, playerNumber }) => (
            <li key={playerId}>
              <input
                onChange={handleOnChangeRadio}
                value={playerId}
                type="radio"
                id={playerId}
                name="players"
              />
              <label htmlFor={playerId}>
                <span>{fullName}</span>
                <span>{playerNumber}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.metricsGraph}>
        <ScoreChart />
      </div>
    </div>
  );
};
