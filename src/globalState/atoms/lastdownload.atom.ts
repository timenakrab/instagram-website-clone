import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'lastDownload',
	storage: localStorage,
});

export const lastDownloadState = atom<number>({
	key: 'lastDownloadState',
	default: new Date().getTime(),
	effects_UNSTABLE: [persistAtom],
});
