import { getContentFeed } from 'api';
import { Layout } from 'commons';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { feedItemState, feedPaginationState } from 'globalState/atoms/feed.atom';
import HeaderFeed from './components/HeaderFeed';
import ContentFeed from './components/ContentFeed';
// import imagePath from 'utils/imagePath';

interface ReqParam {
	page: number;
	limit: number;
}

const HomePage: FC = () => {
	const init = useRef(false);
	const [, setFeedItem] = useRecoilState(feedItemState);
	const [, setFeedPagination] = useRecoilState(feedPaginationState);

	const fetchFeed = useCallback(
		async ({ page, limit }: ReqParam) => {
			const result = await getContentFeed({ page, limit });
			setFeedItem(result.data);
			setFeedPagination(result.pagination);
		},
		[setFeedItem, setFeedPagination],
	);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
			fetchFeed({ page: 1, limit: 20 });
		}
	}, [fetchFeed]);

	return (
		<Layout>
			<HeaderFeed />
			<ContentFeed />
		</Layout>
	);
};

export default HomePage;
