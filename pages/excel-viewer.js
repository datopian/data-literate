import Head from 'next/head'
import SheetJSApp from '../components/ExcelViewer.js'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <SheetJSApp />
    </Layout>
  )
}
