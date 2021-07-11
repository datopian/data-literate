import { gql } from '@apollo/client'
import client from '../lib/github'

import Layout from '../components/Layout'

export default function Topic({files}) {
  return (
    <Layout>
      This lists the files in the following repo by loading the info from github using graphql API: <a href="https://github.com/datasets/awesome-data">https://github.com/datasets/awesome-data</a>:
      <ul>
        {files.map((file, idx) => {
          return <li>{file.name}</li>
        })
        }
      </ul>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
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

  const files = data.repository.object.entries

  return {
    props: {
      files
    }
  }
}
