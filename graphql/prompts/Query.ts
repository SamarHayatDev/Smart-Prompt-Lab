import { gql } from "@apollo/client";

export const GET_PROMPTS = gql`
  query GetPrompts {
    prompts {
      promt_title
      prompt_desc
      id
    }
  }
`;
