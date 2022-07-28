import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/Skeleton';
import Pagination from '../components/Pagination';

const sortTypeName = ['rating', 'price', 'title'];

export default function Home({ searchValue }) {
	const dispatch = useDispatch();
	const { categoryId, sortId } = useSelector((state) => state.filter);

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [currentPage, setCurrentPage] = React.useState(1);

	const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
	const skeletons = [...new Array(4)].map(() => <Skeleton />);

	React.useEffect(
		function () {
			setIsLoading(true);
			fetch(
				`https://62dd51abccdf9f7ec2c4c001.mockapi.io/items?page=${currentPage}&limit=4&` +
					(categoryId ? 'category=' + categoryId + '&' : '') +
					(sortId ? 'sortBy=' + sortTypeName[sortId] + '&' : '') +
					(searchValue ? 'search=' + searchValue : ''),
			)
				.then((res) => res.json())
				.then((data) => {
					setItems(data);
					setIsLoading(false);
				});
			window.scrollTo(0, 0);
		},
		[categoryId, sortId, searchValue, currentPage],
	);

	return (
		<React.Fragment>
			<div className="content__top">
				<Categories value={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))} />
				<Sort />
			</div>
			<h2 className="content__title">{isLoading ? 'Загрузка...' : 'Все пиццы'}</h2>
			<div className="content__items">
				{isLoading ? (
					skeletons
				) : pizzas.length ? (
					pizzas
				) : (
					<h3>Уууупс, ничего не найдено! Введите что-то другое</h3>
				)}
			</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</React.Fragment>
	);
}
