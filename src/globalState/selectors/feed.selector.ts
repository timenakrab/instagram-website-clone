import { selector } from 'recoil';

import { feedItemState, feedPaginationState } from '../atoms/feed.atom';

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
