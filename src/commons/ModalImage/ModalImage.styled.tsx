import styled from 'styled-components';

export const RootModal = styled.div`
	position: fixed;
	z-index: 99999;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: #000000;
	box-sizing: border-box;
`;

export const ImageModal = styled.img`
	object-fit: cover;
	max-width: 100%;
	max-height: 100%;

	@media screen and (min-width: 1025px) {
		object-fit: contain;
	}
`;

export const ImageModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 1025px) {
		padding: 60px;
		box-sizing: border-box;
	}
`;
