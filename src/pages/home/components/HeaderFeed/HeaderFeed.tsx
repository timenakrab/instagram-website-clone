import { AvatarUser } from 'commons';
import { FC, Fragment, useCallback, useMemo, useState } from 'react';
import {
	ButtonNext,
	ButtonPrev,
	HeaderContainer,
	HeaderFeedWrapper,
	NameUserAvatar,
} from './HeaderFeed.styled';
import { faker } from '@faker-js/faker';
import { chunk } from 'lodash';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

const HeaderFeed: FC = () => {
	const [group, setGroup] = useState(0);

	const users = useMemo(() => {
		const arrUsers = [];
		for (let i = 0; i < 24; i += 1) {
			arrUsers.push({
				avatar: faker.image.city(1600, 900, true),
				username: faker.name.firstName(),
			});
		}

		return chunk(arrUsers, 8);
	}, []);

	const handlePrev = useCallback(() => {
		setGroup((prevState) => prevState - 1);
	}, []);

	const handleNext = useCallback(() => {
		setGroup((prevState) => prevState + 1);
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
				{users[group].map((user, idx) => (
					<NameUserAvatar key={`h_${idx}`}>
						<AvatarUser
							gradientWidth={66}
							gradientHeight={66}
							width={56}
							height={56}
							path={user.avatar}
							alt={user.username}
						/>
						<p>{user.username}</p>
					</NameUserAvatar>
				))}
			</HeaderFeedWrapper>
			{users.length !== group + 1 ? (
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
