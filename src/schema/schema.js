import { gql } from 'apollo-server';

export default gql`
    type Query {
        info: String!
        getObjects(startDate: String!, endDate: String!): [Object!]!
    }

    type Object {
      id: ID!
      name: String!
      diameter_min: Float!
      diameter_max: Float!
      is_potentially_hazardous_asteroid: Boolean!
      close_approach_date: String!
      relative_velocity: Float!
      miss_distance: Float!
    }
`