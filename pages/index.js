import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
  return (
    <Layout>
      <h1 className="text-center">Data Literate Documents</h1>
      <p className="text-center">Rufus Pollock and friends<br/><img src="/datopian-logo.png" className="h-6 inline-block" /></p>
      <p><strong>What?</strong> An experiment in a ultra-simple markdown-plus approach to rapidly creating and sharing data-rich material such as datasets and data-driven stories.</p>
      <p><strong>Why?</strong> A simple, fast, extensible way to present data(sets) and author data-driven content.</p>
      <p><strong>How?</strong> Technically the essence is Markdown+React (MDX) + a curated toolkit of components for data-presentation + NextJS for framework and deployment. Check out the <Link href="/demo/"><a>demo</a></Link>, an example or see more examples below</p>

      <h2>Background</h2>
      <p>I have observed two converging data-rich use cases:</p>
      <ul>
        <li><strong>Data Publishing</strong>: quickly presenting data whether a single file or a full dataset.</li>
        <li><strong>Data Stories</strong>: creating data-driven content from the simplest of a blog post with a graph to high end there is sophisticated data journalism and visualization.</li>
      </ul>
      <p>Both of these can now be well served by a simple markdown-plus approach. Taking data publishing first. I've long been a fan of ultra-simple <code>README + metadata + csv</code> datasets. With the evolution of frontmatter we can merge the metadata into the README. However, we still need to "present" the dataset and the key thing for a dataset is the data and this is not something markdown ever supported well ... But now with MDX and the richness of the javascript ecosystem it's quite easy to enhance our markdown and build a rendering pipeleine.</p>

      <h2>All Pages</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              href={`${post.filePath.replace(/\.mdx?$/, '')}`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
