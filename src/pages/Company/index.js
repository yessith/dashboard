import { DetailCompany } from 'components/DetailCompany'
import { Contact } from 'components/Contact'
import './Company.css'

export const Company = () => {
	return (
		<main className='mainCompany'>
			<DetailCompany />
			<Contact />
		</main>
	)
}
