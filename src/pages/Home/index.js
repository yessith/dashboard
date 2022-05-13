import { AsideLeftHome } from 'components/AsideLeftHome'
import { AsideRightHome } from 'components/AsideRightHome'
import './Home.css'

export const Home = () => {
	return (
		<main className='home'>
			<AsideLeftHome />
			<AsideRightHome />
		</main>
	)
}
