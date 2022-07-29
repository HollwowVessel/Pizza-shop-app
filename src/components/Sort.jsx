import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setSortFilter } from '../redux/slices/filterSlice';

const sortType = ['популярности', 'цене', 'алфавиту'];

export default function Sort() {
	const [visible, setVisible] = React.useState(false);
	const sortId = useSelector((state) => state.filter.sortId);
	const sortRef = React.useRef();
	const dispatch = useDispatch();
	const handleType = (i) => {
		dispatch(setSortFilter(i));
		setVisible(!visible);
	};
	React.useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.path.includes(sortRef.current)) {
				setVisible(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);
	return (
		<div ref={sortRef} className="sort">
			<div className="sort__label" onClick={() => setVisible(!visible)}>
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка по:</b>
				<span>{sortType[sortId]}</span>
			</div>
			{visible && (
				<div className="sort__popup">
					<ul>
						{sortType.map((type, i) => (
							<li key={i} className={i === sortId ? 'active' : ''} onClick={() => handleType(i)}>
								{type}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
