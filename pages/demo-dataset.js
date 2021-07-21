import fs from 'fs'
import path from 'path'

import parse from '../lib/markdown.js'
import Layout from '../components/Layout'
import Table from '../components/Table'

// MDX stuff
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

import CustomLink from '../components/CustomLink'
import { Vega, VegaLite } from 'react-vega'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  Table: dynamic(() => import('../components/Table')),
  Excel: dynamic(() => import('../components/Excel')),
  // TODO: try and make these dynamic ...
  Vega: Vega,
  VegaLite: VegaLite,
  LineChart: dynamic(() => import('../components/LineChart'))
}


export default function Dataset({source, frontMatter}) {
  return (
    <Layout title={frontMatter.title}>
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
        Data: <a href={frontMatter.resources[0].path}>{frontMatter.resources[0].path}</a>
        <Table url={frontMatter.resources[0].path} />
        <MDXRemote {...source} components={components} />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const mdxPath = path.join('datasets', 'demo', 'README.md')
  const postFilePath = fs.existsSync(mdxPath) ? mdxPath : mdxPath.slice(0, -1)
  const source = fs.readFileSync(postFilePath)

  const { mdxSource, frontMatter } = await parse(source)

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter,
    },
  }
}

