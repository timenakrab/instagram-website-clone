import Icon from '@mdi/react';
import { IconButton } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import colors from 'utils/colors';
import texts from 'utils/texts';

export const CardContainer = styled.div`
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 80px;
	padding-right: 80px;
`;
export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 8px;
`;
export const MiniAvatar = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid ${colors.gray.transparent[32]};
`;
export const Header = styled.div`
	width: calc(100% - 100px);
	margin-left: 8px;
	margin-right: 8px;
	display: flex;
	align-items: center;

	& .name {
		${texts.body2};
		text-transform: capitalize;
	}
`;
export const LikeHeader = styled.div`
	width: 42px;
	height: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ImageContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
`;
export const CardImage = styled.img`
	width: 100%;
	border-radius: 8px;
	border: 1px solid ${colors.gray.transparent[32]};
	margin: 0 auto;
`;
export const LikeContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
export const ButtonAction = styled(IconButton)``;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const FadeInOutLove = styled(Icon)`
	position: absolute;
	z-index: 9;
	opacity: 0;

	&.fadein {
		animation: ${fadeIn} 1s linear;
	}
`;
interface IPill {
	bgColor: string;
}
export const Pill = styled.span<IPill>`
	padding: 2px 8px;
	border-radius: 16px;
	${texts.body2};
	background-color: ${({ bgColor }) => bgColor};
	color: ${colors.common.white};
	margin-right: 8px;
	margin-bottom: 8px;
	text-transform: capitalize;
`;
export const StatusContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
export const TypeContainer = styled.div`
	display: flex;
	align-items: start;
	flex-flow: wrap;
`;
export const StatContainer = styled.div`
	display: flex;
	align-items: start;
	flex-flow: wrap;
	overflow: hidden;
`;
