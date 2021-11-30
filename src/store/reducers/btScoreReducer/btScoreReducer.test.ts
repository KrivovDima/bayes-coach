import {
  btScoreReducer,
  BtScoreReducerStateType,
  MetricsType,
  PlayerType,
  setPlayers,
  setStats,
} from "./btScoreReducer";

const startState: BtScoreReducerStateType = {
  gameId: "1212",
  teamId: "98594444",
  players: [{ playerId: "93", fullName: "Лионель Месси", playerNumber: 1 }],
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
  ],
};

test("players must be added", () => {
  const newPlayers: PlayerType[] = [
    { playerId: "85", fullName: "Н'Голо Канте", playerNumber: 9 },
    { playerId: "84", fullName: "Мануэль Нойер", playerNumber: 10 },
  ];
  const action = setPlayers(newPlayers);
  const endState = btScoreReducer(startState, action);
  const countPlayers = 2;
  const firstPlayerIndex = 0;
  const secondPlayerIndex = 1;

  expect(endState.players.length).toBe(countPlayers);
  expect(endState.players[firstPlayerIndex].fullName).toBe("Н'Голо Канте");
  expect(endState.players[secondPlayerIndex].fullName).toBe("Мануэль Нойер");
});

test("stats must be added", () => {
  const newStats: MetricsType[] = [
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
  ];
  const action = setStats(newStats);
  const endState = btScoreReducer(startState, action);
  const countStatsObject = 3;
  const firstStatsObjectIndex = 0;
  const secondStatsObjectIndex = 1;

  expect(endState.metrics.length).toBe(countStatsObject);
  expect(endState.metrics[firstStatsObjectIndex].playerId).toBe("86");
  expect(endState.metrics[secondStatsObjectIndex].playerId).toBe("85");
});
