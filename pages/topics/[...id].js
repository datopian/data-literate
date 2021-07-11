import DataLiterate from '../../components/DataLiterate'
import parse from '../../lib/markdown.js'
import { getTopics } from '../../utils/topicsData'

export default function Topic({source, frontMatter}) {
  return (
    <DataLiterate source={source} frontMatter={frontMatter} />
  )
}

export async function getStaticProps({ params }) {
  const topics = await getTopics()
  const filename  = params.id + '.md'
  const topic = topics.find(t => t.name == filename)

  const source = topic.object.text
  const { mdxSource, frontMatter } = await parse(source)

  // HACK: can't have date types in data we pass around as does not json serialize
  // see e.g. https://github.com/vercel/next.js/discussions/11498
  // you could try to disable gray-matter auto-parsing of dates - see https://github.com/jonschlinkert/gray-matter/issues/62
  // however simplest for now is to reconvert
  for (const [key, value] of Object.entries(frontMatter)) {
    if (value instanceof Date) {
      frontMatter[key] = value.toJSON()
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter,
    },
  }
}

export async function getStaticPaths() {
  const topics = await getTopics()
  const paths = topics.map((topic) => {
    return {
      params: {
        id: [topic.name.replace(/\.mdx?$/, '')]
      }
    }
  })

  return {
    paths,
    fallback: false
  } 
}
