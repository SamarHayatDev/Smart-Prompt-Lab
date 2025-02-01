import { gql } from "@apollo/client";

export const GET_PROMPTS = gql`
  query GetPrompts {
    prompts {
      prompt_title
      prompt_desc
      id
    }
  }
`;
