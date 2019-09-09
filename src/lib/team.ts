import { request, gql } from "./client";
import { TeamsFromCliQuery } from "./team.generated";

export const getTeams = async () => {
  const { teams } = await request<TeamsFromCliQuery>(gql`
    query teamsFromCLI {
      teams {
        id
        name
      }
    }
  `);

  return teams;
};

export const findTeam = async (name: string) => {
  const teams = await getTeams();
  const team = teams.find(team => team.name.toLowerCase() === name.toLowerCase());
  return team;
};
