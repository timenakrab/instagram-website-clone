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
	overflow: hidden;

	@media screen and (max-width: 767px) {
		width: 0px;
		padding: 0px;
	}

	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 160px;
	}
`;

export const HeaderLeftNavbar = styled.div`
	display: flex;
	align-items: center;
	padding: 25px 12px 36px 12px;
	height: 95px;
	box-sizing: border-box;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	margin-left: 245px;

	@media screen and (max-width: 767px) {
		margin-left: 0px;
	}

	@media screen and (min-width: 768px) and (max-width: 991px) {
		margin-left: 160px;
	}
`;

export const FeedContainer = styled.div`
	width: 630px;

	@media screen and (max-width: 767px) {
		width: 100%;
	}

	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 630px;
	}
`;
