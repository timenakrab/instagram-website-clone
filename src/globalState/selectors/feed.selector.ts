import { selector } from 'recoil';

import { feedItemState, feedPaginationState, feedLoadMoreState } from '../atoms/feed.atom';

export const feedItemSelector = selector({
	key: 'feedItemSelector',
	get: ({ get }) => {
		const feedItem = get(feedItemState);

		return feedItem;
	},
});

export const feedPaginationSelector = selector({
	key: 'feedPaginationSelector',
	get: ({ get }) => {
		const feedPagination = get(feedPaginationState);

		return feedPagination;
	},
});

export const feedLoadMoreSelector = selector({
	key: 'feedLoadMoreSelector',
	get: ({ get }) => {
		const isLoadmore = get(feedLoadMoreState);

		return isLoadmore;
	},
});
