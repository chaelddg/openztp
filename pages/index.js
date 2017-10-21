import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'

import { Layout, Menu, Breadcrumb, Icon, Card, Rate } from 'antd'
const { Header, Content, Footer, Sider } = Layout

const fakeData = [
	{
		"id": 1001,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 2002,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 3003,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 4004,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	},
	{
		"id": 5005,
		"biz_name": "My Kitchen by Chef Chris",
		"rating": 3,
		"price_range": "2000 - 3000",
		"city": "Manila City",
		"address": "1032-34 Belen Street Manila, 1007 Metro Manila Philippines",
		"tel_number": "02-5212371"
	}
]

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default ({ children }) => (
	<Layout>
		<Head>
      <title>OpenZtp</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.13.6/antd.min.css"/>
    </Head>
		<Header className="header">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
				<Menu.Item key="alipay">
					<Link href='/b'>
						<span>
							<Icon type="setting" />Settings
						</span>
					</Link>
				</Menu.Item>
				<Menu.Item key="search">
					<Link href='/a'>
						<span>
							<Icon type="search" />Search
						</span>
					</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '50px 50px' }}>
			{
				fakeData.map((data, index) => (
					<div key={data.id} className="item-group">
						<Card title={`${data.id} - ${data.biz_name}`} extra={<a href="#">More</a>} style={{ width: 500 }}>
							<img src="//via.placeholder.com/140x100" />
					    <p>{ data.price_range }</p>
							<div>
								<span>
					        <Rate onChange={()=> {}} value={data.rating} />
					        {data.rating && <span className="ant-rate-text">{data.rating} stars</span>}
					      </span>
							</div>
					    <p>{ data.city }</p>
					  </Card>
					</div>
				))
			}

    </Content>
  </Layout>
)
