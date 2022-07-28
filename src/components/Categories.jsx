import React from 'react';
import filter, { setCategoryId } from './../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

export default function Categories() {
	const categoryName = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	const dispatch = useDispatch();
	const categoryId = useSelector((state) => state.filter.categoryId);
	return (
		<div className="categories">
			<ul>
				{categoryName.map((category, i) => (
					<li
						key={category}
						className={categoryId === i ? 'active' : ''}
						onClick={() => dispatch(setCategoryId(i))}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
