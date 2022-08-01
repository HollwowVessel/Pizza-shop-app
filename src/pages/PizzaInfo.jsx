import React from 'react';
import { useParams } from 'react-router-dom';

export default function PizzaInfo() {
	const { id } = useParams();
	const [item, setItem] = React.useState({});
	React.useEffect(() => {
		try {
			fetch('https://62dd51abccdf9f7ec2c4c001.mockapi.io/items/' + id)
				.then((res) => res.json())
				.then((data) => {
					setItem(data);
				});
		} catch (error) {
			alert('Ошибка загрузки!');
		} finally {
			console.log('heck');
		}
	}, [id]);
	if (!item) {
		return <h1>Загрузка...</h1>;
	}
	//to do
	return (
		<div className="container">
			<img src={item.imageUrl} alt="pizzaUrl" />
			<h2>{item.title}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis voluptates,
				recusandae quidem dolorum nam quisquam. Sed, nisi cupiditate. Laudantium repellendus
				eligendi nisi quia eos harum asperiores eum debitis obcaecati.
			</p>
			<h4>{item.price} р. </h4>
		</div>
	);
}
