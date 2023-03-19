import { autoCompleteSelectedState } from 'globalState/atoms/search.atom';
import { autoCompletePokemonSelector } from 'globalState/selectors/search.selector';
import { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
	NavbarSearchContainer,
	SearchAutoComplete,
	SearchInput,
	SearchWrapper,
} from './NavbarSearch.styled';

const NavbarSearch: FC = () => {
	const autoCompletePokemon = useRecoilValue(autoCompletePokemonSelector);
	const autoCompleteSelected = useSetRecoilState(autoCompleteSelectedState);

	return (
		<NavbarSearchContainer>
			<SearchWrapper>
				<SearchAutoComplete
					selectOnFocus
					disablePortal
					size="small"
					options={autoCompletePokemon}
					renderInput={(params) => <SearchInput {...params} label="Pokemon" />}
					onChange={(event, value) => autoCompleteSelected(value as Search.AutoComplete | null)}
				/>
			</SearchWrapper>
		</NavbarSearchContainer>
	);
};

export default NavbarSearch;
