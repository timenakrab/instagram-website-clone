import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Divider } from '@mui/material';
import { getPokemonData } from 'api';
import { likePokemonState } from 'globalState/atoms/like.atom';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import colors from 'utils/colors';
import sleep from 'utils/sleep';
import typeColor from 'utils/typeColor';
import {
	CardHeader,
	ButtonAction,
	Header,
	MiniAvatar,
	CardImage,
	ImageContainer,
	CardContainer,
	FadeInOutLove,
	LikeContainer,
	Pill,
	LikeHeader,
	StatusContainer,
	StatContainer,
	TypeContainer,
} from './Card.styled';

const Card: FC<Pokemon.TranformPokemonItem> = (props) => {
	const { id, avatar, picture, name } = props;
	const [likePokemon, setLikePokemon] = useRecoilState(likePokemonState);
	const [classLike, setClassLike] = useState<string | undefined>(undefined);
	const [pokemonData, setPokemonData] = useState<Pokemon.Data | null>(null);
	const initData = useRef(false);

	const animation = useCallback(async () => {
		setClassLike('fadein');
		await sleep(1000);
		setClassLike(undefined);
	}, []);

	const handleLike = useCallback(
		(like: boolean) => {
			if (like) {
				setLikePokemon((prevState) => {
					return [...prevState, props];
				});
				animation();
			} else {
				setLikePokemon((prevState) => {
					return prevState.filter((pokemon) => pokemon.id !== props.id);
				});
			}
		},
		[props, animation, setLikePokemon],
	);

	const isLike = useMemo(() => {
		const find = likePokemon.find((pokemon) => pokemon.id === props.id);
		if (find) {
			return true;
		}

		return false;
	}, [likePokemon, props.id]);

	useEffect(() => {
		if (!initData.current) {
			initData.current = true;
			getPokemonData(id).then((res) => {
				setPokemonData(res);
			});
		}
	}, [id]);

	return (
		<CardContainer>
			<CardHeader>
				<MiniAvatar src={avatar} />
				<Header>
					<span className="name">{name}</span>
				</Header>
				<LikeHeader>
					<ButtonAction onClick={() => handleLike(!isLike)}>
						<Icon
							path={isLike ? mdiHeart : mdiHeartOutline}
							size={1}
							color={isLike ? colors.error.main : undefined}
						/>
					</ButtonAction>
				</LikeHeader>
			</CardHeader>
			<ImageContainer>
				<CardImage src={picture} />
				<LikeContainer onDoubleClick={() => handleLike(true)}>
					<FadeInOutLove
						className={classLike}
						path={mdiHeart}
						size="160px"
						color={colors.error.main}
					/>
				</LikeContainer>
			</ImageContainer>
			<StatusContainer>
				<div>
					<TypeContainer>
						{pokemonData?.types.map((itm) => (
							<Pill key={itm.slot} bgColor={typeColor(itm.type.name)}>
								{itm.type.name}
							</Pill>
						))}
					</TypeContainer>
					<StatContainer>
						{pokemonData?.stats.map((itm) => (
							<Pill key={itm.stat.name} bgColor={colors.gray[500]}>
								{itm.stat.name.replace('-', ' ')}: {itm.base_stat}
							</Pill>
						))}
					</StatContainer>
				</div>
			</StatusContainer>
			<Divider className="mt-2 mb-2" />
		</CardContainer>
	);
};

export default Card;
