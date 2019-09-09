import * as Types from '../schema';

export type CreateIssueFromCliMutationVariables = {
  title: Types.Scalars['String'],
  teamId: Types.Scalars['String'],
  labelIds?: Types.Maybe<Array<Types.Scalars['String']>>
};


export type CreateIssueFromCliMutation = (
  { __typename?: 'Mutation' }
  & { issueCreate: (
    { __typename?: 'IssuePayload' }
    & { issue: Types.Maybe<(
      { __typename?: 'Issue' }
      & Pick<Types.Issue, 'title' | 'number'>
    )> }
  ) }
);
