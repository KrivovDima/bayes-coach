import React, { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";

import styles from "./BtScore.module.scss";
import { ScoreChart } from "./ScoreChart/ScoreChart";

import playerPhoto from "images/BtScore/playerPhoto.jpg";
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
        <h4 className={styles.playersTitle}>Выбрать игрока</h4>
        <ul>
          {players.map(({ playerId, fullName, playerNumber }) => (
            <li className={styles.player} key={playerId}>
              <input
                className={styles.checkBox}
                onChange={handleOnChangeRadio}
                value={playerId}
                type="radio"
                id={playerId}
                name="players"
                checked={playerId === currentPlayerId}
              />
              <label className={styles.label} htmlFor={playerId}>
                <span className={styles.fullName}>{fullName}</span>
                <span className={styles.playerNumber}>{playerNumber}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.metricsGraph}>
        <div className={styles.metricsGraphHead}>
          <h3 className={styles.metricsGraphTitle}>
            Значимость каждого показателя в расчете оценки игрока
          </h3>
          <div className={styles.playerPhotoContainer}>
            <img
              className={styles.playerPhoto}
              src={playerPhoto}
              alt="playerPhoto"
            />
            <input type="button" className={styles.download} />
          </div>
        </div>
        <ScoreChart labels={labels} metricValues={metricValues} />
      </div>
    </div>
  );
};
