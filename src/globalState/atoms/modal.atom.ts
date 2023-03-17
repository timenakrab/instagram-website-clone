import { atom } from 'recoil';

export const modalImageState = atom<{
	visible: boolean;
	source: string;
}>({
	key: 'modalImageState',
	default: {
		visible: false,
		source: '',
	},
});
