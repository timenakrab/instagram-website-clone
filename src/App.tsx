import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const HomePage = lazy(() => import(/* webpackChunkName: "instagram-home-page" */ 'pages/home'));
const SearchPage = lazy(
	() => import(/* webpackChunkName: "instagram-search-page" */ 'pages/search'),
);

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Suspense>
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/search/:searchText" component={SearchPage} exact />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
