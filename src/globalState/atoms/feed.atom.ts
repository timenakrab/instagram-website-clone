import { atom } from 'recoil';

export const feedItemState = atom<Pokemon.TranformPokemonItem[]>({
	key: 'feedItemState',
	default: [],
});

export const feedPaginationState = atom<Pokemon.PaginationList>({
	key: 'feedPaginationState',
	default: {
		offset: 0,
		limit: 20,
	},
});

export const feedLoadMoreState = atom<boolean>({
	key: 'feedLoadMoreState',
	default: true,
});
