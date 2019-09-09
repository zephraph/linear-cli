import * as Types from '../schema';

export type LabelsFromCliQueryVariables = {};


export type LabelsFromCliQuery = (
  { __typename?: 'Query' }
  & { issueLabels: Array<(
    { __typename?: 'IssueLabel' }
    & Pick<Types.IssueLabel, 'id' | 'name'>
    & { team: (
      { __typename?: 'Team' }
      & Pick<Types.Team, 'id'>
    ) }
  )> }
);
