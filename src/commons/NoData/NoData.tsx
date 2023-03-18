import { FC } from 'react';
import { TextNoData } from './NoData.styled';

interface INodata {
	message?: string;
}
const Nodata: FC<INodata> = ({ message = 'No data available' }) => {
	return (
		<div>
			<TextNoData>{message}</TextNoData>
		</div>
	);
};

export default Nodata;
