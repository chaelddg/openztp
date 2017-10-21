import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Menu, Icon } from 'antd'

{/* <Link href='/a'><a>Home</a></Link> | */}

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default ({ children }) => (
	<div>
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta charSet='utf-8' />
			<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.13.6/antd.min.css' />
		</Head>
		<Menu
			onClick={()=>{}}
			selectedKeys={['mail']}
			mode="horizontal"
		>
			<Menu.Item key="mail">
				<Icon type="mail" />Navigation One
			</Menu.Item>
			<Menu.Item key="app" disabled>
				<Icon type="appstore" />Navigation Two
			</Menu.Item>
			<SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
				<MenuItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
			<Menu.Item key="alipay">
				<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
			</Menu.Item>
		</Menu>
	</div>
)
