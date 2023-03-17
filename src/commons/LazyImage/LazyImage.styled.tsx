import styled from 'styled-components';

export const ImageWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

export const Placeholder = styled.div`
	background-color: #f0f0f0;
	width: 100%;
	height: 100%;
`;

export const StyledImage = styled.img<{ loaded: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: ${({ loaded }) => (loaded ? 1 : 0)};
	transition: opacity 0.5s ease-in-out;
`;
