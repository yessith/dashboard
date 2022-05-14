import { ArticleContact } from 'components/ArticleContact'
import { ArticleList } from 'components/ArticleList'
import { Slider } from 'components/Slider'

import './Articles.css'

export const Articles = () => {
	return (
		<main className='mainArticles'>
			<ArticleContact />
			<Slider />
			<ArticleList />
		</main>
	)
}
