import { atom } from 'recoil';

export const autoCompletePokemonState = atom<Search.AutoComplete[]>({
	key: 'autoCompletePokemonState',
	default: [],
});

export const autoCompleteSelectedState = atom<Search.AutoComplete | null>({
	key: 'autoCompleteSelectedState',
	default: null,
});
