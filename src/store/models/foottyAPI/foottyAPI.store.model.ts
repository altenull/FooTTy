import { FoottyAPILeagueState } from './foottyAPI-league.store.model';
import { FoottyAPITeamState } from './foottyAPI-team.store.model';

// State Model
export interface FoottyAPIState {
  foottyAPILeague: FoottyAPILeagueState;
  foottyAPITeam: FoottyAPITeamState;
}
