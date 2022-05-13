import './Search.css'
export function Search() {
	return (
		<div className='home__search'>
			<h1>¿Que quieres buscar?</h1>
			<p>Encuentra la informacíon que desees consltar ...</p>
			<div className='search__container'>
				<div className='search__select'>
					<select defaultValue=''>
						<option value='value1'>Todos los servicios</option>
						<option value='value2'>servicios A</option>
						<option value='value3'>servicios A</option>
					</select>
				</div>
				<div className='search__content'>
					<input
						className='search__content--input'
						type='text'
						placeholder='que servicio quieres consltar'
					/>
					<button className='search__content--btn'>
						<i className='fas fa-search'></i>
					</button>
				</div>
			</div>
		</div>
	)
}
