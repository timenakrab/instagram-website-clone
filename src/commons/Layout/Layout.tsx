import { IndexedDb } from 'libs';
import { FC, Fragment, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import {
	Container,
	FeedContainer,
	HeaderLeftNavbar,
	LayoutWrapper,
	LeftNavbar,
} from './Layout.styled';
import { ModalImage, MenuLeft, MenuMobile } from 'commons';
import { getContentFeed } from 'api';
import { tranfromAutoComplete, tranfromPokemonList } from 'utils/tranfromData';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { lastDownloadState } from 'globalState/atoms/lastdownload.atom';
import { autoCompletePokemonState } from 'globalState/atoms/search.atom';

interface ILayout {
	navbarComponent?: ReactNode;
	children?: ReactNode;
}
const Layout: FC<ILayout> = ({ navbarComponent = null, children }) => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [lastDownload, setLastDownload] = useRecoilState(lastDownloadState);
	const setAutocompletePokemon = useSetRecoilState(autoCompletePokemonState);

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
					const autocomplete = tranfromAutoComplete(list);
					updatePokedex(list);
					setLastDownload(currentTimestamp + 86400000);
					setAutocompletePokemon(autocomplete);
				});
			} else {
				const list = tranfromPokemonList(data);
				const autocomplete = tranfromAutoComplete(list);
				setAutocompletePokemon(autocomplete);
			}
		};
		runIndexDb();
	}, [indexedDb, lastDownload, setLastDownload, updatePokedex, setAutocompletePokemon]);

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
			{navbarComponent}
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
			{windowDimensions.width < 768 ? <MenuMobile /> : <Fragment />}
		</LayoutWrapper>
	);
};

export default Layout;
