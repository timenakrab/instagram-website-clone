import { Layout } from 'commons';
import { likePokemonSelector } from 'globalState/selectors/like.selector';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { ContentFavorites, HeaderFavorites } from './components';

const FavoritesPage: FC = () => {
	const favorites = useRecoilValue(likePokemonSelector);

	return (
		<Layout>
			<HeaderFavorites />
			<ContentFavorites list={favorites} />
		</Layout>
	);
};

export default FavoritesPage;
