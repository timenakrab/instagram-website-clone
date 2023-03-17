import { FC } from 'react';

interface ICircleGradient {
	isRotate?: boolean;
	startColor?: string;
	stopColor?: string;
	width?: number;
	height?: number;
}
const CircleGradient: FC<ICircleGradient> = ({
	isRotate,
	startColor = '#ff1493',
	stopColor = '#800080',
	width = 512,
	height = 512,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			x="0"
			y="0"
			enableBackground="new 0 0 394.02 394.02"
			version="1.1"
			viewBox="0 0 394.02 394.02"
			xmlSpace="preserve"
		>
			<defs>
				<linearGradient id="myGradient" x1="0%" x2="100%" y1="0%" y2="100%">
					<stop offset="0%" stopColor={startColor}></stop>
					<stop offset="100%" stopColor={stopColor}></stop>
				</linearGradient>
			</defs>
			<path
				fill="url(#myGradient)"
				d="M197.009 0C88.378 0 0 88.378 0 197.01s88.378 197.01 197.009 197.01 197.01-88.378 197.01-197.01S305.641 0 197.009 0zm0 379.02C96.649 379.02 15 297.37 15 197.01S96.649 15 197.009 15c100.361 0 182.01 81.649 182.01 182.01s-81.649 182.01-182.01 182.01z"
			>
				{isRotate && (
					<animateTransform
						attributeName="transform"
						attributeType="xml"
						dur="1s"
						from="0 197.01 197.01"
						repeatCount="indefinite"
						to="360 197.01 197.01"
						type="rotate"
					></animateTransform>
				)}
			</path>
		</svg>
	);
};

export default CircleGradient;
