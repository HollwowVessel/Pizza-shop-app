import React from 'react';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/Skeleton';

export default function Home() {
	const sortTypeName = ['rating', 'price', 'title'];
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortType, setSortType] = React.useState(0);
	React.useEffect(
		function () {
			setIsLoading(true);
			fetch(
				'https://62dd51abccdf9f7ec2c4c001.mockapi.io/items' +
					(categoryId ? '?category=' + categoryId : '') +
					(sortType ? (categoryId ? '&' : '?') + 'sortBy=' + sortTypeName[sortType] : ''),
			)
				.then((res) => res.json())
				.then((data) => {
					setTimeout(() => {
						setItems(data);
						setIsLoading(false);
					}, 50);
				});
			window.scrollTo(0, 0);
		},
		[categoryId, sortType],
	);

	return (
		<React.Fragment>
			<div className="content__top">
				<Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
				<Sort value={sortType} onClickSort={(id) => setSortType(id)} />
			</div>
			<h2 className="content__title">{isLoading ? 'Загрузка...' : 'Все пиццы'}</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(8)].map(() => <Skeleton />)
					: items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
			</div>
		</React.Fragment>
	);
}
