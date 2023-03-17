import {
	mdiChatProcessing,
	mdiChatProcessingOutline,
	mdiCompass,
	mdiCompassOutline,
	mdiHeart,
	mdiHeartOutline,
	mdiHome,
	mdiHomeOutline,
	mdiMagnify,
	mdiMoviePlay,
	mdiMoviePlayOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem, MenuList } from './MenuLeft.styled';

const menus = [
	{
		path: '/',
		name: 'Home',
		icon: mdiHomeOutline,
		iconActive: mdiHome,
	},
	{
		path: '/search',
		name: 'Search',
		icon: mdiMagnify,
		iconActive: mdiMagnify,
	},
	{
		path: '/explore',
		name: 'Explore',
		icon: mdiCompassOutline,
		iconActive: mdiCompass,
	},
	{
		path: '/reels',
		name: 'Reels',
		icon: mdiMoviePlayOutline,
		iconActive: mdiMoviePlay,
	},
	{
		path: '/messages',
		name: 'Messages',
		icon: mdiChatProcessingOutline,
		iconActive: mdiChatProcessing,
	},
	{
		path: '/notifications',
		name: 'Notifications',
		icon: mdiHeartOutline,
		iconActive: mdiHeart,
	},
];

const MenuLeft: FC = () => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState('/');

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location]);

	return (
		<MenuList>
			{menus.map((menu, idx) => (
				<MenuItem key={`menu_${idx}`}>
					<Link to={menu.path}>
						<Icon path={currentPath === menu.path ? menu.iconActive : menu.icon} size="24px" />
						<span className={classNames('name', { active: currentPath === menu.path })}>
							{menu.name}
						</span>
					</Link>
				</MenuItem>
			))}
		</MenuList>
	);
};

export default MenuLeft;
