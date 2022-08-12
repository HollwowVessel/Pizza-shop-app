import React from 'react';
import { useParams } from 'react-router-dom';

export default function PizzaInfo() {
	const { id } = useParams();
	const [item, setItem] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://62dd51abccdf9f7ec2c4c001.mockapi.io/items/' + id)
			.then((res) => res.json())
			.then((data) => {
				setItem(data);
				setIsLoading(false);
			});
	}, [id]);
	return !isLoading ? (
		<div className="container" style={{ display: 'flex' }}>
			<img src={item.imageUrl} alt="pizzaUrl" width={280} />
			<div>
				<h2 style={{ marginBottom: '20px', fontSize: '24px' }}>{item.title}</h2>
				<h4>{item.price} р. </h4>
			</div>
		</div>
	) : (
		<h1>Загрузка...</h1>
	);
}
