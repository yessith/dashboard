import logo from 'images/logo.png'
import './Footer.css'

export const Footer = () => {
	return (
		<footer className='footer'>
			<figure className='footer__img'>
				<img src={logo} alt='Quipux Logo' />
			</figure>
		</footer>
	)
}
