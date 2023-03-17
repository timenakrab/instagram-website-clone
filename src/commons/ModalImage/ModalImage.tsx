import { modalImageState } from 'globalState/atoms/modal.atom';
import { FC, Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import sleep from 'utils/sleep';
import { ProgressBar } from '../ProgressBar';
import { ImageModal, ImageModalContainer, RootModal } from './ModalImage.styled';

const ModalImage: FC = () => {
	const [modalImage, setModalImage] = useRecoilState(modalImageState);
	const [imageMeta, setImageMeta] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (modalImage.visible) {
			sleep(3500).then(() => {
				setModalImage({
					visible: false,
					source: '',
				});
				setImageMeta({
					width: 0,
					height: 0,
				});
			});
		}
	}, [modalImage.visible, setModalImage]);

	useEffect(() => {
		if (modalImage.source) {
			const img = new Image();
			img.src = modalImage.source;
			img.onload = () => {
				const width = img.width;
				const height = img.height;
				setImageMeta({
					width,
					height,
				});
			};
		}
	}, [modalImage.source]);

	if (!modalImage.visible && imageMeta.width === 0 && imageMeta.height === 0) return <Fragment />;

	let imageStyle: React.CSSProperties = {
		aspectRatio: 1,
	};

	if (imageMeta.width > imageMeta.height) {
		imageStyle = {
			width: '100%',
		};
	} else if (imageMeta.width < imageMeta.height) {
		imageStyle = {
			height: '100%',
		};
	}

	return (
		<RootModal>
			<ProgressBar
				second={3}
				containerStyle={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 99999,
				}}
			/>
			<ImageModalContainer>
				<ImageModal src={modalImage.source} alt="" style={imageStyle} />
			</ImageModalContainer>
		</RootModal>
	);
};

export default ModalImage;
