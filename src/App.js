import { Routes, Route } from 'react-router-dom';
import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import PizzaInfo from './pages/PizzaInfo';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export const SearchContext = React.createContext();

function App() {
	const [searchValue, setSearchValue] = React.useState('');
	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home searchValue={searchValue} />} />
							<Route path="/cart" element={<Cart searchValue={searchValue} />} />
							<Route path="/pizzas/:id" element={<PizzaInfo />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
