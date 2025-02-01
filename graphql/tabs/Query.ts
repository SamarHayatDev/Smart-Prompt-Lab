import { gql } from "@apollo/client";

export const GET_TABS = gql`
  query GetTabs {
    tabs {
      id
      name
    }
  }
`;
