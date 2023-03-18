import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const HomePage = lazy(() => import(/* webpackChunkName: "instagram-home-page" */ 'pages/home'));
// const SearchPage = lazy(
// 	() => import(/* webpackChunkName: "instagram-search-page" */ 'pages/search'),
// );
// const ExplorePage = lazy(
// 	() => import(/* webpackChunkName: "instagram-explore-page" */ 'pages/explore'),
// );
// const ReelsPage = lazy(() => import(/* webpackChunkName: "instagram-reels-page" */ 'pages/reels'));
// const MessagesPage = lazy(
// 	() => import(/* webpackChunkName: "instagram-messages-page" */ 'pages/messages'),
// );
const FavoritesPage = lazy(
	() => import(/* webpackChunkName: "instagram-favorites-page" */ 'pages/favorites'),
);

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Suspense>
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/search" component={HomePage} exact />
						{/* <Route path="/explore" component={ExplorePage} exact />
						<Route path="/reels" component={ReelsPage} exact />
						<Route path="/messages" component={MessagesPage} exact /> */}
						<Route path="/favorites" component={FavoritesPage} exact />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
