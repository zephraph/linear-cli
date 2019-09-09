import { request, gql } from "./client";
import { findTeam } from "./team";
import { findLabels } from "./labels";
import { CreateIssueFromCliMutation, CreateIssueFromCliMutationVariables } from "./issue.generated";
import to from "await-to-js";

interface IssueInput {
  title: string;
  team: string;
  description?: string;
  labels?: string[];
}

const normalizeIssue = async (issue: IssueInput) => {
  const { title, team: teamName, description, labels = [] } = issue;

  const [teamErr, team] = await to(findTeam(teamName));

  if (teamErr || !team) {
    throw new Error("Unable to fetch team");
  }

  const [labelErr, labelIds = []] = await to(findLabels(team.id, labels));

  if (labelErr) {
    console.error("Fail to fetch labels, continuing anyway");
  }

  return {
    title,
    description,
    teamId: team.id,
    labelIds
  };
};

export const create = async (issue: CreateIssueFromCliMutationVariables) => {
  request<CreateIssueFromCliMutation, CreateIssueFromCliMutationVariables>(
    gql`
      mutation CreateIssueFromCLI($title: String!, $teamId: String!, $labelIds: [String!]) {
        issueCreate(input: { title: $title, teamId: $teamId, labelIds: $labelIds }) {
          issue {
            title
            number
          }
        }
      }
    `,
    issue
  );
};
