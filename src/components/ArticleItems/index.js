import './ArticleItems.css'
export const ArticleItems = ({ data }) => {
	return (
		<div className='articles__box'>
			<figure className='articles__box--img'>
				<img src={data.imagen} alt={data.titulo} />
			</figure>
			<div className='articles__box--text'>
				<h3>{data.titulo}</h3>
				<p>{data.descripcion}</p>
			</div>
		</div>
	)
}
