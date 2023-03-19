import { getPokemonData } from 'api';
import { CardSearch, Layout, NoData } from 'commons';
import { autoCompleteSelectedState } from 'globalState/atoms/search.atom';
import { isEmpty } from 'lodash';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import NavbarSearch from './components/NavbarSearch';

const SearchPage: FC = () => {
	const [autoCompleteSelected, setAutoCompleteSelected] = useRecoilState(autoCompleteSelectedState);
	const [pokemonData, setPokemonData] = useState<Pokemon.Data | null>(null);
	const init = useRef(false);

	const fetchPokemonData = useCallback(async (id: string) => {
		setPokemonData(null);
		const result = await getPokemonData(id);
		setPokemonData(result);
	}, []);

	useEffect(() => {
		if (init.current && autoCompleteSelected) {
			fetchPokemonData(autoCompleteSelected.id);
		}
	}, [autoCompleteSelected, fetchPokemonData]);

	useEffect(() => {
		if (!init.current) {
			init.current = true;
			setAutoCompleteSelected(null);
		}
	}, [setAutoCompleteSelected]);

	const render = useMemo(() => {
		if (autoCompleteSelected && pokemonData) {
			return <CardSearch {...pokemonData} />;
		} else if (autoCompleteSelected && isEmpty(pokemonData)) {
			return <NoData message="Loading..." />;
		}

		return <NoData message="Please select pokemon." />;
	}, [autoCompleteSelected, pokemonData]);

	return (
		<Layout navbarComponent={<NavbarSearch />}>
			<div style={{ marginTop: 76 }}>{render}</div>
		</Layout>
	);
};

export default SearchPage;
