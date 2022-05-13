import './AsideRightHome.css'
import woman from 'images/resource-1.png'

export function AsideRightHome() {
	return (
		<section className='home__details'>
			<figure className='home__details--img'>
				<img src={woman} alt='Cliente' />
				<h2>Servicios Quipux</h2>
			</figure>
			<div className='home__details--text'>
				<h3>Trámites en tu mano</h3>
				<p>
					Ahora podrás hacer todos tus trámites desde la comodida de tu casa, desde cualquier
					dispositivo computadora, tablet o móvil.
				</p>
				<div className='home__details--next'>
					<span>1/4</span>
					<span className='home__details--progrress'></span>
				</div>
			</div>
		</section>
	)
}
