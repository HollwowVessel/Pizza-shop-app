import React from 'react';

export default function Categories({ value, onClickCategory }) {
	const categoryName = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categoryName.map((category, i) => (
					<li
						key={category}
						className={value === i ? 'active' : ''}
						onClick={() => onClickCategory(i)}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
