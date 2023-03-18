import { getContentFeed } from 'api';
import { Layout } from 'commons';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { feedItemState, feedPaginationState } from 'globalState/atoms/feed.atom';
import HeaderFeed from './components/HeaderFeed';
import ContentFeed from './components/ContentFeed';
import { tranfromPokemonList } from 'utils/tranfromData';

interface ReqParam {
	offset: number;
	limit: number;
}

const HomePage: FC = () => {
	const init = useRef(false);
	const [feedItem, setFeedItem] = useRecoilState(feedItemState);
	const [, setFeedPagination] = useRecoilState(feedPaginationState);
	const offsetRef = useRef(0);
	const limitRef = useRef(20);

	const fetchFeed = useCallback(
		async ({ offset, limit }: ReqParam) => {
			const response = await getContentFeed({ offset, limit });
			const list = tranfromPokemonList(response.results);
			setFeedItem(list);
			setFeedPagination({
				offset: offsetRef.current,
				limit: limitRef.current,
			});
		},
		[setFeedItem, setFeedPagination],
	);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
			fetchFeed({ offset: offsetRef.current, limit: limitRef.current });
		}
	}, [fetchFeed]);

	return (
		<Layout>
			<HeaderFeed />
			<ContentFeed list={feedItem} />
		</Layout>
	);
};

export default HomePage;
