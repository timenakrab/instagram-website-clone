import { AvatarUser } from 'commons';
import { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import {
	ButtonNext,
	ButtonPrev,
	HeaderContainer,
	HeaderFeedWrapper,
	NameUserAvatar,
} from './HeaderFeed.styled';
import { chunk } from 'lodash';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import randomNumber from 'utils/randomNumber';
import { getContentFeed } from 'api';
import { tranfromPokemonList } from 'utils/tranfromData';

const HeaderFeed: FC = () => {
	const [group, setGroup] = useState(0);
	const [pokemons, setPokemons] = useState<Pokemon.TranformPokemonItem[][]>([]);
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const ramdomOffset = useRef(randomNumber(1000));
	const initHeader = useRef(false);

	const handlePrev = useCallback(() => {
		setGroup((prevState) => prevState - 1);
	}, []);

	const handleNext = useCallback(() => {
		setGroup((prevState) => prevState + 1);
	}, []);

	useEffect(() => {
		if (!initHeader.current) {
			initHeader.current = true;
			getContentFeed({ offset: ramdomOffset.current, limit: 24 }).then((response) => {
				const list = tranfromPokemonList(response.results);
				setPokemons(chunk(list, 8));
			});
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let gradientWidthHeight = 66;
	let avatarWidthHeight = 56;

	if (windowDimensions.width > 425 && windowDimensions.width <= 768) {
		gradientWidthHeight = 52;
		avatarWidthHeight = 42;
	} else if (windowDimensions.width <= 425) {
		gradientWidthHeight = 36;
		avatarWidthHeight = 32;
	}

	return (
		<HeaderContainer>
			{group !== 0 ? (
				<ButtonPrev onClick={handlePrev} size="small">
					<Icon path={mdiChevronLeft} size={1} />
				</ButtonPrev>
			) : (
				<Fragment />
			)}
			<HeaderFeedWrapper>
				{pokemons.length ? (
					pokemons[group].map((user, idx) => (
						<NameUserAvatar key={`h_${idx}`}>
							<AvatarUser
								gradientWidth={gradientWidthHeight}
								gradientHeight={gradientWidthHeight}
								width={avatarWidthHeight}
								height={avatarWidthHeight}
								path={user.avatar}
								alt={user.name}
							/>
							<p style={{ width: gradientWidthHeight }}>{user.name}</p>
						</NameUserAvatar>
					))
				) : (
					<Fragment />
				)}
			</HeaderFeedWrapper>
			{pokemons.length && pokemons.length !== group + 1 ? (
				<ButtonNext onClick={handleNext} size="small">
					<Icon path={mdiChevronRight} size={1} />
				</ButtonNext>
			) : (
				<Fragment />
			)}
		</HeaderContainer>
	);
};

export default HeaderFeed;
