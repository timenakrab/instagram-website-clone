import { useState, useEffect, useRef, FC } from 'react';
import { ImageWrapper, Placeholder, StyledImage } from './LazyImage.styled';

interface ILazyImage {
	src: string;
	alt: string;
	[key: string]: any;
}
const LazyImage: FC<ILazyImage> = ({ src, alt, ...props }) => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && imgRef.current) {
					imgRef.current.src = src;
					observer.disconnect();
				}
			},
			{ threshold: 0 },
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, [src]);

	return (
		<ImageWrapper>
			<Placeholder />
			<StyledImage
				ref={imgRef}
				alt={alt}
				loaded={loaded}
				onLoad={() => setLoaded(true)}
				{...props}
			/>
		</ImageWrapper>
	);
};

export default LazyImage;
