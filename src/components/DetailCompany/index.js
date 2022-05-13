import data from 'data/info-contacto.json'
import './DetailCompany.css'

export const DetailCompany = () => {
	const contact = data[0]

	return (
		<section className='company'>
			<h2>Información De La Empresa</h2>
			<div className='company__datails'>
				<div className='company__details__box'>
					<div>
						<h3>Nombre</h3>
						<span>{contact.nombre}</span>
					</div>
					<div>
						<h3>Fecha de creación</h3>
						<span>{contact.fecha}</span>
					</div>
				</div>
				<div className='company__details__box'>
					<h3>Dirección</h3>
					<address>{contact.direccion02} </address>
					<span>{contact.ciudad}</span>
				</div>
				<div className='company__details__box'>
					<h3>Número de teléfonos</h3>
					<div className='company__details__box--phone'>
						<span>Fijo</span>
						<span>{contact.telfijo}</span>
					</div>
					<div className='company__details__box--phone'>
						<span>Fax</span>
						<span>{contact.telfijo}</span>
					</div>
					<h3>Sitio Web</h3>
					<a href='/'>{contact.web}</a>
				</div>
			</div>
		</section>
	)
}
