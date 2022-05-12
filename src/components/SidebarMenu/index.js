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

/**
 * <ul className='sidebar__menu__list'>
						<li className='sidebar__menu__list__items'>
							<button className='sidebar__menu__list--btn'>
								<i className='sidebar__menu__list--ico far fa-building'></i>
								<span>Empresas</span>
								<i className='sidebar__menu__list--downIco fas fa-chevron-down'></i>
							</button>
							<ul className='sidebar__subMenu'>
								<li className='sidebar__subMenu__list'>
									<Link className='sidebar__subMenu__list--items' to='/company'>
										Sub Empresas
									</Link>
								</li>
							</ul>
						</li>
						<li className='sidebar__menu__list__items'>
							<button className='sidebar__menu__list--btn'>
								<i className='sidebar__menu__list--ico far fa-file-alt'></i>
								<span>Articulos</span>
								<i className='sidebar__menu__list--downIco fas fa-chevron-down'></i>
							</button>
							<ul className='sidebar__subMenu'>
								<li className='sidebar__subMenu__list'>
									<Link className='sidebar__subMenu__list--items' to='/articles'>
										Sub Articulos
									</Link>
								</li>
							</ul>
						</li>
						<li className='sidebar__menu__list__items'>
							<button className='sidebar__menu__list--btn'>
								<i className='sidebar__menu__list--ico fas fa-user'></i>
								<span>Colaboradores</span>
								<i className='sidebar__menu__list--downIco fas fa-chevron-down'></i>
							</button>
							<ul className='sidebar__subMenu'>
								<li className='sidebar__subMenu__list'>
									<Link className='sidebar__subMenu__list--items' to='#'>
										Sub Colaboradores
									</Link>
								</li>
							</ul>
						</li>
					</ul>
 */
