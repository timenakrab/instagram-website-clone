import { modalImageState } from 'globalState/atoms/modal.atom';
import { selector } from 'recoil';

export const modalImageSelector = selector({
	key: 'modalImageSelector',
	get: ({ get }) => {
		const modal = get(modalImageState);

		return modal;
	},
});
