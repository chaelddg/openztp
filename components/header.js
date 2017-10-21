import Router from 'next/router'
import { Layout, Menu, Icon } from 'antd'
const { Header } = Layout

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default () => (
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
)

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually

function onClickHandler (href) {
  return (e) => {
    e.preventDefault()
    Router.push(href)
  }
}

const Link = ({ children, href }) => (
  <a href='#' onClick={onClickHandler(href)}>
    {children}
    <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
  </a>
)
