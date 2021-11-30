import { instance } from "./apiInstance";

export const btScoreAPI = {
  getPlayers(gameId: string, teamId: string) {
    return instance.get(`games/${gameId}/lineup/?team_id=${teamId}`);
  },
  getStats(gameId: string, teamId: string) {
    return instance.get(`stats/features/?game_id=${gameId}&team_id=${teamId}`);
  },
};
