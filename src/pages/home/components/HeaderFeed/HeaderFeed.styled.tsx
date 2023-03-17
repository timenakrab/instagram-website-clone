import { IconButton } from '@mui/material';
import styled from 'styled-components';
import colors from 'utils/colors';
import texts from 'utils/texts';

export const HeaderContainer = styled.div`
	position: relative;
`;

export const HeaderFeedWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	padding: 16px 0px;
	justify-content: space-around;
	align-items: center;
`;

export const NameUserAvatar = styled.div`
	& p {
		margin: 0;
		text-align: center;
		color: ${colors.gray[900]};
		${texts.caption}
		font-weight: lighter;
	}
`;

export const ButtonPrev = styled(IconButton)`
	position: absolute !important;
	z-index: 9;
	left: 16px;
	top: 33px;
	background-color: ${colors.text.ondark.secondary} !important;
`;

export const ButtonNext = styled(IconButton)`
	position: absolute !important;
	z-index: 9;
	right: 16px;
	top: 33px;
	background-color: ${colors.text.ondark.secondary} !important;
`;
