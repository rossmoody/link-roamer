import { Spacer } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import BackgroundBursts from '../components/BackgroundBursts'
import HighlightSection from '../components/HighlightSection'
import Layout from '../components/Layout'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Link Roamer - Quickly handle all the links on a web page</title>
        <meta
          name="description"
          content="A free and open-source browser extension for finding, organizing, inspecting, bookmarking, grouping, and exporting all the links from a page."
        />
      </Head>
      <Layout>
        <Main />
        <Spacer height={[12, 20, 48]} />
        <HighlightSection />
        <BackgroundBursts />
      </Layout>
    </React.Fragment>
  )
}

export default Home
