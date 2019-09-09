import { Command, flags } from "@oclif/command";
import dedent from "dedent";
import prompt from "prompts";
import { findLabels } from "../lib/labels";
import { getTeams, findTeam } from "../lib/team";
import { create } from "../lib/issue";

export default class Create extends Command {
  static description = dedent`
    Creates a new issue. Flags not provided will be prompted for at runtime.
  `;

  static examples = [
    dedent`
      $ linear create
      $ linear create --title "Fix a bug" --label Bug
    `
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    label: flags.string({
      char: "l",
      multiple: true,
      description: "label to be added to the issue"
    }),
    title: flags.string({
      char: "t"
    }),
    team: flags.string({
      char: "T",
      env: "LINEAR_TEAM"
    })
  };

  async run() {
    const { flags } = this.parse(Create);
    let { team, title, label: labels } = flags;
    const teams = await getTeams();

    if (!team) {
      const answer = await prompt({
        type: "select",
        name: "team",
        message: "Pick the team this issue is for",
        choices: teams.map(team => ({
          title: team.name,
          value: team.id
        }))
      });
      team = answer.team as string;
    } else {
      const teamResult = await findTeam(team);
      if (!teamResult) {
        this.error(
          `Couldn't find team ${team}. Maybe you meant one of these:\n` + teams.map(team => `\t- ${team.name}\n`)
        );
        process.exit(1);
      }
      team = teamResult!.id;
      team as string;
    }

    if (!title) {
      const answer = await prompt({
        type: "text",
        name: "title",
        message: "Enter the issue title"
      });
      title = answer.title as string;
    }

    if (!labels || labels.length === 0) {
      const labelList = await findLabels(team, labels);
      if (labelList.length !== 0) {
        const answer = await prompt({
          type: "multiselect",
          name: "labels",
          message: "Add labels to the issue",
          choices: labelList.map(label => ({
            title: label.name,
            value: label.id
          }))
        });
        labels = answer.labels;
      }
    }

    create({
      title,
      teamId: team,
      labelIds: labels
    });
  }
}
