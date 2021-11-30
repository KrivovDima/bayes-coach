import { Dispatch } from "redux";

import { btScoreAPI } from "../../../api/btScoreAPI";

export type MetricsListType = {
  metricName: string;
  value: number;
};

export type MetricsType = {
  playerId: string;
  metricsList: MetricsListType[];
};

export type PlayerType = {
  playerId: string;
  fullName: string;
  playerNumber: number;
};

export type BtScoreReducerStateType = {
  gameId: string;
  teamId: string;
  players: PlayerType[];
  metrics: MetricsType[];
};

type BtScoreReducerActionsType =
  | ReturnType<typeof setPlayers>
  | ReturnType<typeof setStats>;

const initialState: BtScoreReducerStateType = {
  gameId: "1212",
  teamId: "98594444",
  players: [
    { playerId: "93", fullName: "Лионель Месси", playerNumber: 1 },
    { playerId: "92", fullName: "Роберт Левандовски", playerNumber: 2 },
    { playerId: "91", fullName: "Криштиану Роналду", playerNumber: 3 },
    { playerId: "90", fullName: "Кевин Де Брейне", playerNumber: 4 },
    { playerId: "89", fullName: "Кильян Мбаппе", playerNumber: 5 },
    { playerId: "88", fullName: "Неймар", playerNumber: 6 },
    { playerId: "87", fullName: "Ян Облак", playerNumber: 7 },
    { playerId: "86", fullName: "Харри Кейн", playerNumber: 8 },
    { playerId: "85", fullName: "Н'Голо Канте", playerNumber: 9 },
    { playerId: "84", fullName: "Мануэль Нойер", playerNumber: 10 },
  ],
  metrics: [
    {
      playerId: "93",
      metricsList: [
        { metricName: "metric1", value: -1.2 },
        { metricName: "metric2", value: 4.0 },
        { metricName: "metric3", value: 1.8 },
        { metricName: "metric4", value: -1 },
        { metricName: "metric5", value: -2.5 },
      ],
    },
    {
      playerId: "92",
      metricsList: [
        { metricName: "metric1", value: 1.4 },
        { metricName: "metric2", value: 2 },
        { metricName: "metric3", value: 1.1 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -1.5 },
      ],
    },
    {
      playerId: "91",
      metricsList: [
        { metricName: "metric1", value: 3.2 },
        { metricName: "metric2", value: 1.0 },
        { metricName: "metric3", value: 2.8 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -1.5 },
      ],
    },
    {
      playerId: "90",
      metricsList: [
        { metricName: "metric1", value: 2.2 },
        { metricName: "metric2", value: 3.0 },
        { metricName: "metric3", value: 2.8 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -1.5 },
      ],
    },
    {
      playerId: "89",
      metricsList: [
        { metricName: "metric1", value: 3.2 },
        { metricName: "metric2", value: 1.0 },
        { metricName: "metric3", value: 2.8 },
        { metricName: "metric4", value: -3 },
        { metricName: "metric5", value: -2.5 },
      ],
    },
    {
      playerId: "88",
      metricsList: [
        { metricName: "metric1", value: 2.2 },
        { metricName: "metric2", value: 4.5 },
        { metricName: "metric3", value: 1.1 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -2.1 },
      ],
    },
    {
      playerId: "87",
      metricsList: [
        { metricName: "metric1", value: 1.6 },
        { metricName: "metric2", value: 3 },
        { metricName: "metric3", value: 1.1 },
        { metricName: "metric4", value: -3 },
        { metricName: "metric5", value: -2.1 },
      ],
    },
    {
      playerId: "86",
      metricsList: [
        { metricName: "metric1", value: 3.2 },
        { metricName: "metric2", value: 3.0 },
        { metricName: "metric3", value: 3.8 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -1.5 },
      ],
    },
    {
      playerId: "85",
      metricsList: [
        { metricName: "metric1", value: 3.2 },
        { metricName: "metric2", value: 3 },
        { metricName: "metric3", value: 1.1 },
        { metricName: "metric4", value: -2 },
        { metricName: "metric5", value: -2.4 },
      ],
    },
    {
      playerId: "84",
      metricsList: [
        { metricName: "metric1", value: 1.2 },
        { metricName: "metric2", value: 4.0 },
        { metricName: "metric3", value: 1.8 },
        { metricName: "metric4", value: -1 },
        { metricName: "metric5", value: -2.5 },
      ],
    },
  ],
};

export const btScoreReducer = (
  state = initialState,
  action: BtScoreReducerActionsType
): BtScoreReducerStateType => {
  switch (action.type) {
    case "btScoreReducer/SET-PLAYERS":
      return { ...state, ...action.payload };
    case "btScoreReducer/SET-STATS":
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};

export const setPlayers = (players: PlayerType[]) =>
  ({ type: "btScoreReducer/SET-PLAYERS", payload: { players } } as const);
export const setStats = (metrics: MetricsType[]) =>
  ({ type: "btScoreReducer/SET-STATS", payload: { metrics } } as const);

export const fetchPlayers =
  (gameId: string, teamId: string) => async (dispatch: Dispatch) => {
    try {
      const response = await btScoreAPI.getPlayers(gameId, teamId);
      dispatch(setPlayers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
export const fetchStats =
  (gameId: string, teamId: string) => async (dispatch: Dispatch) => {
    try {
      const response = await btScoreAPI.getStats(gameId, teamId);
      dispatch(setStats(response.data));
    } catch (e) {
      console.log(e);
    }
  };
