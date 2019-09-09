import * as Types from '../schema';

export type TeamsFromCliQueryVariables = {};


export type TeamsFromCliQuery = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & Pick<Types.Team, 'id' | 'name'>
  )> }
);
