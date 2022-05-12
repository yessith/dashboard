import { Link } from 'react-router-dom'

export function SubMenu() {
	return (
		<div className='accordion accordion-flush' id='accordionFlushExample'>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingOne'>
					<button
						className='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseOne'
						aria-expanded='false'
						aria-controls='flush-collapseOne'
					>
						<i className='sidebar__menu__list--ico far fa-building'></i>
						<span>Empresas</span>
					</button>
				</h2>
				<div
					id='flush-collapseOne'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingOne'
					data-bs-parent='#accordionFlushExample'
				>
					<div className='accordion-body'>
						<Link className='sidebar__subMenu__list--items' to='/company'>
							Sub Empresas
						</Link>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingTwo'>
					<button
						className='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseTwo'
						aria-expanded='false'
						aria-controls='flush-collapseTwo'
					>
						<i className='sidebar__menu__list--ico far fa-file-alt'></i>
						<span>Articulos</span>
					</button>
				</h2>
				<div
					id='flush-collapseTwo'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingTwo'
					data-bs-parent='#accordionFlushExample'
				>
					<div className='accordion-body'>
						<Link className='sidebar__subMenu__list--items' to='/articles'>
							Sub Articulos
						</Link>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingThree'>
					<button
						className='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseThree'
						aria-expanded='false'
						aria-controls='flush-collapseThree'
					>
						<i className='sidebar__menu__list--ico fas fa-user'></i>
						<span>Colaboradores</span>
					</button>
				</h2>
				<div
					id='flush-collapseThree'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingThree'
					data-bs-parent='#accordionFlushExample'
				>
					<div className='accordion-body'>
						<Link className='sidebar__subMenu__list--items' to='/'>
							Sub Colaboradores
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
