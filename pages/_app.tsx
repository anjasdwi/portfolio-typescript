import { AppProps } from 'next/app'
// import Layout from '../src/components/Layout'
import '../src/styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Layout title="Home | Next.js + TypeScript Example">
      <Component {...pageProps} />
    // </Layout>
  )
}

export default MyApp