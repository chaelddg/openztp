import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'

import { Layout } from 'antd'
const { Content, Footer, Sider } = Layout

import Header from '../components/header'

export default ({ children }) => (
	<Layout>
		<Head>
      <title>OpenZtp</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.13.6/antd.min.css"/>
    </Head>
		<Header />

    <Content style={{ padding: '50px 50px' }}>
			{children}
    </Content>
  </Layout>
)
