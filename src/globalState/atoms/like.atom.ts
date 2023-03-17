import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'Like',
	storage: localStorage,
});

export const likePokemonState = atom<Pokemon.TranformPokemonItem[]>({
	key: 'likePokemonState',
	default: [],
	effects_UNSTABLE: [persistAtom],
});
