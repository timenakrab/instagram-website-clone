import { selector } from 'recoil';

import { likePokemonState } from '../atoms/like.atom';

export const likePokemonSelector = selector({
	key: 'likePokemonSelector',
	get: ({ get }) => {
		const likePokemon = get(likePokemonState);

		return likePokemon;
	},
});
