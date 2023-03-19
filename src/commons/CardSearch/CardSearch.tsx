import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { likePokemonState } from 'globalState/atoms/like.atom';
import { FC, useCallback, useMemo, useState } from 'react';
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
	InfoHeader,
} from './CardSearch.styled';

const CardSearch: FC<Pokemon.Data> = (props) => {
	const { id, name, types, stats } = props;
	const [likePokemon, setLikePokemon] = useRecoilState(likePokemonState);
	const [classLike, setClassLike] = useState<string | undefined>(undefined);
	const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

	const animation = useCallback(async () => {
		setClassLike('fadein');
		await sleep(1000);
		setClassLike(undefined);
	}, []);

	const handleLike = useCallback(
		(like: boolean) => {
			if (like) {
				setLikePokemon((prevState) => {
					return [
						...prevState,
						{
							avatar: avatar,
							id: `${id}`,
							name: name,
							picture: avatar,
							url: url,
						},
					];
				});
				animation();
			} else {
				setLikePokemon((prevState) => {
					return prevState.filter((pokemon) => pokemon.id !== `${id}`);
				});
			}
		},
		[setLikePokemon, animation, avatar, id, name, url],
	);

	const isLike = useMemo(() => {
		const find = likePokemon.find((pokemon) => pokemon.id === `${props.id}`);
		if (find) {
			return true;
		}

		return false;
	}, [likePokemon, props.id]);

	return (
		<CardContainer>
			<CardHeader>
				<MiniAvatar src={avatar} />
				<Header>
					<span className="name">{`#${id} ${name}`}</span>
				</Header>
				<InfoHeader></InfoHeader>
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
				<CardImage src={avatar} />
				<LikeContainer onDoubleClick={() => handleLike(true)}>
					<FadeInOutLove
						className={classLike}
						path={mdiHeart}
						size="160px"
						color={colors.error.main}
					/>
				</LikeContainer>
			</ImageContainer>
			<StatusContainer className="active">
				<div>
					<TypeContainer>
						{types.map((itm) => (
							<Pill key={itm.slot} bgColor={typeColor(itm.type.name)}>
								{itm.type.name}
							</Pill>
						))}
					</TypeContainer>
					<StatContainer>
						{stats.map((itm) => (
							<Pill key={itm.stat.name} bgColor={colors.gray[500]}>
								{itm.stat.name.replace('-', ' ')}: {itm.base_stat}
							</Pill>
						))}
					</StatContainer>
				</div>
			</StatusContainer>
		</CardContainer>
	);
};

export default CardSearch;
