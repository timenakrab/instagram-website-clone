import { FC, Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';
import { feedItemSelector } from 'globalState/selectors/feed.selector';

interface ILoadMore {
	visible: boolean;
	cbLoadmore: (isShow: boolean) => void;
}
const LoadMore: FC<ILoadMore> = ({ visible, cbLoadmore }) => {
	const feedItem = useRecoilValue(feedItemSelector);
	const [ref, inView] = useInView({
		threshold: 0,
	});

	useEffect(() => {
		if (inView) {
			cbLoadmore(true);
		} else {
			cbLoadmore(false);
		}
	}, [cbLoadmore, inView]);

	if (!feedItem.length || !visible) return <Fragment />;

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: '50px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{inView ? 'Load More...' : ''}
		</div>
	);
};

export default LoadMore;
