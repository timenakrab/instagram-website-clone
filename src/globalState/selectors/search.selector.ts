import { selector } from 'recoil';

import { autoCompletePokemonState, autoCompleteSelectedState } from '../atoms/search.atom';

export const autoCompletePokemonSelector = selector({
	key: 'autoCompletePokemonSelector',
	get: ({ get }) => {
		const autocomplete = get(autoCompletePokemonState);

		return autocomplete;
	},
});

export const autoCompleteSelectedSelector = selector({
	key: 'autoCompleteSelectedSelector',
	get: ({ get }) => {
		const selected = get(autoCompleteSelectedState);

		return selected;
	},
});
