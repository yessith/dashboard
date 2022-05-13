import './Contact.css'
import data from 'data/info-contacto.json'

export const Contact = () => {
	const contact = data[0]

	return (
		<section className='contact'>
			<h2>Información De Contacto</h2>
			<div className='contact__container'>
				<section className='contact__info'>
					<div className='contact__info__box'>
						<div>
							<h3>Dirección</h3>
							<address>{contact.direccion01} </address>
							<span>{contact.ciudad}</span>
						</div>
						<div>
							<h3>Correo Electrónico</h3>
							<span>{contact.correo}</span>
						</div>
					</div>
					<div className='contact__info__box'>
						<div>
							<h3>Sitio Web</h3>
							<a href='/'>{contact.web}</a>
						</div>
						<div>
							<h3>Red Social</h3>
							<a href='/'>{contact.rrss01}</a>
							<a href='/'>{contact.rrss02}</a>
						</div>
					</div>
				</section>
				<section className='contact__details'>
					<div className='contact__details__box'>
						<h3>Dirección de correspondencia de correo</h3>
						<address>{contact.direccion01} </address>
						<span>{contact.municipio}</span>
					</div>
					<div className='contact__details__box'>
						<h3>Número de teléfonos</h3>
						<div>
							<span>Fijo</span>
							<span>{contact.telfijo}</span>
						</div>
						<div>
							<span>Celular</span>
							<span>{contact.celular}</span>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}
