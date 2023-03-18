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
								gradientWidth={66}
								gradientHeight={66}
								width={56}
								height={56}
								path={user.avatar}
								alt={user.name}
							/>
							<p>{user.name}</p>
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
