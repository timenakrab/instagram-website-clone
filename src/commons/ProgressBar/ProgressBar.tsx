import { FC } from 'react';
import { Bar, Progress } from './ProgressBar.styled';

interface IProgressBar {
	second?: number;
	containerStyle?: React.CSSProperties | undefined;
	colorStart?: string;
	colorEnd?: string;
}
const ProgressBar: FC<IProgressBar> = ({
	containerStyle,
	second = 3,
	colorStart = '#ff1493',
	colorEnd = '#800080',
}) => {
	return (
		<Progress style={{ ...containerStyle }}>
			<Bar second={second} colorStart={colorStart} colorEnd={colorEnd} />
		</Progress>
	);
};

export default ProgressBar;
