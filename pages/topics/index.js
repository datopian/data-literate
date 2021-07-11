import Link from 'next/link'

import Layout from '../../components/Layout'
import { getTopics } from '../../utils/topicsData'


export default function Index({ topics }) {
  return (
    <Layout>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li>
            <Link
              href={`/topics/${topic.name.replace(/\.mdx?$/, '')}`}
            >
              <a>{topic.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const topics = await getTopics()

  return { props: { topics } }
}
