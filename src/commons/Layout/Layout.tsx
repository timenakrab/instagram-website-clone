import { IndexedDb } from 'libs';
import { FC, Fragment, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import {
	Container,
	FeedContainer,
	HeaderLeftNavbar,
	LayoutWrapper,
	LeftNavbar,
} from './Layout.styled';
import { ModalImage, MenuLeft } from 'commons';
import { getContentFeed } from 'api';
import { tranfromPokemonList } from 'utils/tranfromData';
import { useRecoilState } from 'recoil';
import { lastDownloadState } from 'globalState/atoms/lastdownload.atom';

interface ILayout {
	children?: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [lastDownload, setLastDownload] = useRecoilState(lastDownloadState);
	const indexedDb = useMemo(() => {
		return new IndexedDb('pokedex');
	}, []);

	const updatePokedex = useCallback(
		async (pokemons: Pokemon.TranformPokemonItem[]) => {
			await indexedDb.putBulkValue('pokemons', pokemons);
		},
		[indexedDb],
	);

	useEffect(() => {
		const runIndexDb = async () => {
			await indexedDb.createObjectStore(['pokemons']);
			const data: Pokemon.TranformPokemonItem[] = await indexedDb.getAllValue('pokemons');
			const currentTimestamp = new Date().getTime();
			if (data.length === 0 || currentTimestamp > lastDownload) {
				getContentFeed({ offset: 0, limit: 1281 }).then((response) => {
					const list = tranfromPokemonList(response.results);
					updatePokedex(list);
					setLastDownload(currentTimestamp + 86400000);
				});
			}
		};
		runIndexDb();
	}, [indexedDb, lastDownload, setLastDownload, updatePokedex]);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<LayoutWrapper>
			{windowDimensions.width >= 768 ? (
				<LeftNavbar>
					<HeaderLeftNavbar>
						<img src="/pokedex.webp" height={20} />
					</HeaderLeftNavbar>
					<MenuLeft />
				</LeftNavbar>
			) : (
				<Fragment />
			)}
			<Container>
				<FeedContainer>{children}</FeedContainer>
			</Container>
			<ModalImage />
		</LayoutWrapper>
	);
};

export default Layout;
