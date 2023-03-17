import Icon from '@mdi/react';
import { mdiHome, mdiMagnify } from '@mdi/js';
import { InstagramIcon } from 'commons/Icons';
import { FC, ReactNode } from 'react';
import {
	Container,
	FeedContainer,
	HeaderLeftNavbar,
	LayoutWrapper,
	LeftNavbar,
	MenuItem,
	MenuList,
} from './Layout.styled';
import { Link } from 'react-router-dom';
import { ModalImage } from 'commons';

interface ILayout {
	children?: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
	return (
		<LayoutWrapper>
			<LeftNavbar>
				<HeaderLeftNavbar>
					<InstagramIcon />
				</HeaderLeftNavbar>
				<MenuList>
					<MenuItem>
						<Link to="/">
							<Icon path={mdiHome} size="24px" />
							<span className="name active">Home</span>
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="#">
							<Icon path={mdiMagnify} size="24px" />
							<span className="name">Search</span>
						</Link>
					</MenuItem>
				</MenuList>
			</LeftNavbar>
			<Container>
				<FeedContainer>{children}</FeedContainer>
			</Container>
			<ModalImage />
		</LayoutWrapper>
	);
};

export default Layout;
