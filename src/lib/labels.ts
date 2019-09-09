import { gql, request } from "./client";
import { LabelsFromCliQuery } from "./labels.generated";

export const findLabels = async (teamID: string, labels: string[]) => {
  const { issueLabels } = await request<LabelsFromCliQuery>(gql`
    query labelsFromCLI {
      issueLabels {
        id
        name
        team {
          id
        }
      }
    }
  `);

  return issueLabels.filter(label => label.team.id === teamID);
};
