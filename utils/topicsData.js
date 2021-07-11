import { gql } from '@apollo/client'
import client from '../lib/github'

export async function getTopics() {
  // github query inspired by https://gist.github.com/MichaelCurrin/6777b91e6374cdb5662b64b8249070ea
  const { data, loading, error } = await client.query({
    query: gql`
query RepoFiles($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    object(expression: "HEAD:") {
      ... on Tree {
        entries {
          name
          type
          mode
          
          object {
            ... on Blob {
              byteSize
              text
              isBinary
            }
          }
        }
      }
    }
  }
}
    `,
    variables: {
      "owner": "datasets",
      "name": "awesome-data"
    }
  });

  return data.repository.object.entries
}
