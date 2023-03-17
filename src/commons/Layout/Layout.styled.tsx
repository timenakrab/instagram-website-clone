import styled from 'styled-components';
import colors from 'utils/colors';

export const LayoutWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
`;

export const LeftNavbar = styled.div`
	position: fixed;
	padding: 12px;
	box-sizing: border-box;
	top: 0;
	left: 0;
	width: 245px;
	height: 100vh;
	border-right: 1px solid ${colors.gray.transparent[24]};
`;

export const HeaderLeftNavbar = styled.div`
	display: flex;
	align-items: center;
	padding: 25px 12px 36px 12px;
	height: 95px;
	box-sizing: border-box;
`;

export const Container = styled.div`
	min-height: 100vh;
	padding-left: 245px;
`;

export const FeedContainer = styled.div`
	width: 630px;
	margin: 0 auto;
`;
