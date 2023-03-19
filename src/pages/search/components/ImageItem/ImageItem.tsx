import React, { FC } from 'react';
import { Image } from './ImageItem.styled';

interface IImageItem {
	width: number | string;
	src: string;
	srcSet: string;
	alt: string;
	loading: 'eager' | 'lazy';
}
const ImageItem: FC<IImageItem> = ({ width, src, srcSet, alt, loading }) => {
	return (
		<Image
			width={width}
			src={`${src}?w=248&fit=crop&auto=format`}
			srcSet={`${srcSet}?w=248&fit=crop&auto=format&dpr=2 2x`}
			alt={alt}
			loading={loading}
		/>
	);
};

export default ImageItem;
