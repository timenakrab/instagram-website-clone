import CircleGradient from 'assets/svg/CircleGradient';
import { FC, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalImageState } from 'globalState/atoms/modal.atom';
import sleep from 'utils/sleep';
import { WarpAvatar, Avatar } from './AvatarUser.styled';

interface IAvatar {
	className?: string;
	width?: number;
	height?: number;
	gradientWidth?: number;
	gradientHeight?: number;
	alt: string;
	path: string;
}
const AvatarUser: FC<IAvatar> = ({
	className,
	width = 56,
	height = 56,
	gradientWidth = 76,
	gradientHeight = 76,
	alt,
	path,
}) => {
	const [isRotate, setIsRotate] = useState<boolean>(false);
	const setModalImage = useSetRecoilState(modalImageState);

	const handleClickAvatar = useCallback(
		async (source: string) => {
			setIsRotate(true);
			await sleep(2000);
			setIsRotate(false);
			setModalImage({
				visible: true,
				source: source,
			});
		},
		[setModalImage],
	);

	return (
		<WarpAvatar className={className}>
			<CircleGradient
				isRotate={isRotate}
				width={gradientWidth}
				height={gradientHeight}
				startColor="#ffc500"
				centerColor="#ff1493"
				stopColor="#bd0a89"
			/>
			<Avatar
				src={path}
				alt={alt}
				style={{
					width,
					height,
					padding: (gradientWidth - width) / 2,
				}}
				onClick={() => handleClickAvatar(path)}
			/>
		</WarpAvatar>
	);
};

export default AvatarUser;
