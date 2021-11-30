import React, { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";

import styles from "./BtScore.module.scss";
import { ScoreChart } from "./ScoreChart/ScoreChart";

import {
  MetricsListType,
  MetricsType,
  PlayerType,
} from "store/reducers/btScoreReducer/btScoreReducer";
import { RootReducerType } from "store/store";

export const BtScore: React.FC = () => {
  const players = useSelector<RootReducerType, PlayerType[]>(
    (state) => state.btScore.players
  );
  const metrics = useSelector<RootReducerType, MetricsType[]>(
    (state) => state.btScore.metrics
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

  let metricsListCurrentPlayer: MetricsListType[] = [];
  const labels: string[] = [];
  const metricValues: number[] = [];
  metrics.forEach(({ playerId, metricsList }) => {
    if (playerId === currentPlayerId) {
      metricsListCurrentPlayer = [...metricsList];
    }
  });
  metricsListCurrentPlayer.forEach(({ metricName, value }) => {
    labels.push(metricName);
    metricValues.push(value);
  });

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
                checked={playerId === currentPlayerId}
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
        <ScoreChart labels={labels} metricValues={metricValues} />
      </div>
    </div>
  );
};
