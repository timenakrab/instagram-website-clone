import styled from 'styled-components';
import colors from 'utils/colors';
import texts from 'utils/texts';

export const MenuList = styled.div`
	height: calc(100% - 95px);
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
	& .name {
		margin-left: 12px;
		${texts.body1};
		font-weight: 300;
	}
`;
