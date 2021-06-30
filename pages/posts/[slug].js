import fs from 'fs'
import matter from 'gray-matter'
import toc from 'remark-toc'
import slug from 'remark-slug'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'

import CustomLink from '../../components/CustomLink'
import { Vega, VegaLite } from 'react-vega'

import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Table: dynamic(() => import('../../components/Table')),
  // TODO: try and make these dynamic ...
  Vega: Vega,
  VegaLite: VegaLite,
  LineChart: dynamic(() => import('../../components/LineChart')),
  Head,
}

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <header>
        <div className="mb-6">
          <h1>{frontMatter.title}</h1>
          {frontMatter.author && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontMatter.author}</p></div>
          )}
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
      </header>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const mdxPath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const postFilePath = fs.existsSync(mdxPath) ? mdxPath : mdxPath.slice(0, -1)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [toc, slug],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
