import { useBurgerBtn } from 'hooks/useBurgerBtn'
import { Link } from 'react-router-dom'

import logo from 'images/logo.png'
import avatar from 'images/user-icon.png'
import './NavBar.css'
import { SidebarMenu } from 'components/SidebarMenu'

export function NavBar() {
	const { handleToggle, active } = useBurgerBtn()

	return (
		<>
			<header className='topNavbar'>
				<div className='topNavbar__button'>
					<button className='topNavbar__button__burger' onClick={handleToggle}>
						<div className='topNavbar__button__burger__content'>
							<span
								className={`topNavbar__button__burger__content--line ${active ? 'active' : ''}`}
							></span>
						</div>
					</button>
				</div>
				<div className='topNavbar__container'>
					<figure className='topNavbar__logo'>
						<Link to='/' rel='noopener noreferrer'>
							<img src={logo} alt='Quipux Logo' />
						</Link>
					</figure>
					<div className='topNavbar__avatar'>
						<figure className='topNavbar__avatar--ico'>
							<img src={avatar} alt='Avatar' />
						</figure>
						<div className='topNavbar__avatar__menu'>
							<span>Usuario Apellido</span>
							<i className='fas fa-chevron-down'></i>
						</div>
					</div>
				</div>
			</header>
			<SidebarMenu active={active} />
		</>
	)
}
