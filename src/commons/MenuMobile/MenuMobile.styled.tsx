import styled from 'styled-components';
import colors from 'utils/colors';
import texts from 'utils/texts';

export const NavbarMobileContainer = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50px;
	background-color: ${colors.common.white};
	border-top: 1px solid ${colors.gray.transparent[32]};
	display: flex;
	flex-direction: row;
	padding: 4px 16px;
	justify-content: space-around;
	-webkit-box-align: center;
	align-items: center;
	box-sizing: border-box;
`;

export const MenuItem = styled.div`
	margin: 4px 0px;
	padding: 12px;
	height: 48px;
	box-sizing: border-box;

	& a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${colors.common.black};
	}
	& .name.active {
		margin-left: 12px;
		${texts.subtitle1};
		font-weight: 500;
	}
	& svg {
		width: 24px;
		height: 24px;
	}
	& .name {
		margin-left: 12px;
		${texts.body1};
		font-weight: 300;
	}
`;
