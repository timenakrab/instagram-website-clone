import { Autocomplete, TextField } from '@mui/material';
import styled from 'styled-components';
import colors from 'utils/colors';

export const NavbarSearchContainer = styled.nav`
	position: fixed;
	z-index: 9999;
	left: 245px;
	height: 60px;
	width: calc(100% - 245px);
	background-color: ${colors.common.white};
	border-bottom: 1px solid ${colors.gray.transparent[32]};
	box-sizing: border-box;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 767px) {
		left: 0px;
		width: 100%;
	}

	@media screen and (min-width: 768px) and (max-width: 991px) {
		left: 160px;
		width: calc(100% - 160px);
	}
`;

export const SearchWrapper = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
`;

export const SearchAutoComplete = styled(Autocomplete)`
	width: 300px;
`;

export const SearchInput = styled(TextField)`
	width: 300px;
`;
