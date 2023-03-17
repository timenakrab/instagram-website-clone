import styled from 'styled-components';

export const WarpAvatar = styled.div`
	/* flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0; */
	display: flex;
	justify-content: center;
	position: relative;

	& svg {
		position: absolute;
		z-index: -1;
	}

	@media screen and (max-width: 767px) {
		& svg {
			width: 80px;
			height: 80px;
			position: absolute;
			z-index: -1;
		}
	}
`;
export const Avatar = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	object-fit: cover;
	object-position: center center;

	@media screen and (max-width: 767px) {
		width: 32px;
		height: 32px;
		padding: 5px;
	}
`;
