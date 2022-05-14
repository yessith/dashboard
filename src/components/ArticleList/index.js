import { ArticleItems } from 'components/ArticleItems'
import data from 'data/articulos.json'
import './ArticleList.css'

export function ArticleList() {
	const articles = data

	return (
		<section className='articles'>
			{articles.map((article) => (
				<ArticleItems key={article.id} data={article} />
			))}
		</section>
	)
}
