import { mdiHeart, mdiHeartOutline, mdiInformationOutline } from '@mdi/js';
import Icon from '@mdi/react';
// import { Divider } from '@mui/material';
import { getPokemonData } from 'api';
import classNames from 'classnames';
import { likePokemonState } from 'globalState/atoms/like.atom';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
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
} from './Card.styled';

const Card: FC<Pokemon.TranformPokemonItem> = (props) => {
	const { id, avatar, picture, name } = props;
	const [likePokemon, setLikePokemon] = useRecoilState(likePokemonState);
	const [classLike, setClassLike] = useState<string | undefined>(undefined);
	const [pokemonData, setPokemonData] = useState<Pokemon.Data | null>(null);
	const [isOpenInfo, setIsOpenInfo] = useState(false);
	const initPokemonData = useRef(false);

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

	const handleInfo = useCallback(() => {
		if (!initPokemonData.current && !isOpenInfo) {
			initPokemonData.current = true;
			getPokemonData(id).then((res) => {
				setPokemonData(res);
				setIsOpenInfo(true);
			});
		} else if (initPokemonData.current && !isOpenInfo) {
			setIsOpenInfo(true);
		} else if (initPokemonData.current && isOpenInfo) {
			setIsOpenInfo(false);
		}
	}, [id, isOpenInfo]);

	const isLike = useMemo(() => {
		const find = likePokemon.find((pokemon) => pokemon.id === props.id);
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
				<LikeHeader>
					<ButtonAction onClick={() => handleLike(!isLike)}>
						<Icon
							path={isLike ? mdiHeart : mdiHeartOutline}
							size={1}
							color={isLike ? colors.error.main : undefined}
						/>
					</ButtonAction>
				</LikeHeader>
				<InfoHeader>
					<ButtonAction onClick={handleInfo}>
						<Icon path={mdiInformationOutline} size={1} />
					</ButtonAction>
				</InfoHeader>
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
			<StatusContainer className={classNames({ active: isOpenInfo })}>
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
		</CardContainer>
	);
};

export default Card;
