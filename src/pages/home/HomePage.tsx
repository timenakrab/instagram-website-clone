import { getContentFeed } from 'api';
import { Layout } from 'commons';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { feedItemState, feedLoadMoreState, feedPaginationState } from 'globalState/atoms/feed.atom';
import HeaderFeed from './components/HeaderFeed';
import ContentFeed from './components/ContentFeed';
import { tranfromPokemonList } from 'utils/tranfromData';

const HomePage: FC = () => {
	const init = useRef(false);
	const [feedItem, setFeedItem] = useRecoilState(feedItemState);
	const setFeedPagination = useSetRecoilState(feedPaginationState);
	const setFeedLoadMore = useSetRecoilState(feedLoadMoreState);
	const offsetRef = useRef(0);
	const limitRef = useRef(20);

	const fetchFeed = useCallback(
		async ({ offset, limit }: Feed.ReqParam) => {
			const response = await getContentFeed({ offset, limit });
			const list = tranfromPokemonList(response.results);
			if (list.length) {
				offsetRef.current = offset;
				limitRef.current = limit;
				setFeedPagination({
					offset: offset,
					limit: limit,
				});
				setFeedItem((prevState) => [...prevState, ...list]);
			} else {
				setFeedLoadMore(false);
			}
		},
		[setFeedItem, setFeedLoadMore, setFeedPagination],
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
			<ContentFeed
				list={feedItem}
				offset={offsetRef.current}
				limit={limitRef.current}
				fetchFeed={fetchFeed}
			/>
		</Layout>
	);
};

export default HomePage;
