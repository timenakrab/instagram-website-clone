import { mdiHeart, mdiHeartOutline, mdiHome, mdiHomeOutline, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { IconButton } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarMobileContainer } from './MenuMobile.styled';

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
		path: '/favorites',
		name: 'Favorites',
		icon: mdiHeartOutline,
		iconActive: mdiHeart,
	},
];

const MenuMobile: FC = () => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState('/');

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location]);

	return (
		<NavbarMobileContainer>
			{menus.map((menu, idx) => (
				<Link key={`menu_${idx}`} to={menu.path}>
					<IconButton>
						<Icon path={currentPath === menu.path ? menu.iconActive : menu.icon} size={1} />
					</IconButton>
				</Link>
			))}
		</NavbarMobileContainer>
	);
};

export default MenuMobile;
