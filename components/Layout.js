import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/Nav'

export default function Layout({ children, title = 'Data Literate' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div className="prose mx-auto p-6">
        {children}
      </div>
    </>
  )
}
