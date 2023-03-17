import { atom } from 'recoil';

export const feedItemState = atom<Feed.Item[]>({
	key: 'feedItemState',
	default: [],
});

export const feedPaginationState = atom<Feed.Pagination>({
	key: 'feedPaginationState',
	default: {
		total: 0,
		limit: 1,
		offset: 0,
		total_pages: 9,
		current_page: 1,
		next_url: 'https://api.artic.edu/api/v1/artworks?page=2',
	},
});
