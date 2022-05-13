import { Link } from 'react-router-dom'

import logo from 'images/logo.png'
import './SidebarMenu.css'
import { SubMenu } from 'components/SubMenu'

export function SidebarMenu({ active }) {
	return (
		<aside className='sidebar'>
			<div className='sidebar__items'>
				<Link to='/company'>
					<i className='far fa-building'></i>
				</Link>
				<Link to='/articles'>
					<i className='far fa-file-alt'></i>
				</Link>
			</div>
			<nav className={`sidebar__menu ${active ? 'active' : ''}`}>
				<figure className='sidebar__menu--logo'>
					<img src={logo} alt='uipux Logo' />
				</figure>
				<div className='sidebar__menu__container'>
					<span>Entries</span>
					<SubMenu />
				</div>
			</nav>
		</aside>
	)
}
