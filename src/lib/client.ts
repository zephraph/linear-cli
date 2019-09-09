import { GraphQLClient } from "graphql-request";
import noop from "tagged-template-noop";

export const createClient = (apiKey: string) =>
  new GraphQLClient("https://api.linear.app/graphql", {
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json"
    }
  });

// TODO: Do something smarter
export const getAPIKey = () => process.env.LINEAR_API_KEY as string;

export const client = createClient(getAPIKey());

export const gql = noop;

export function request<Return>(query: string, variables?: any): Promise<Return>;
export function request<Return, Variables>(query: string, variables: Variables): Promise<Return>;

export function request(query: string, variables?: any) {
  return client.request(query, variables);
}
