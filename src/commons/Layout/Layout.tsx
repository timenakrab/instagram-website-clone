import { InstagramIcon } from 'commons/Icons';
import { FC, ReactNode } from 'react';
import {
	Container,
	FeedContainer,
	HeaderLeftNavbar,
	LayoutWrapper,
	LeftNavbar,
} from './Layout.styled';
import { ModalImage, MenuLeft } from 'commons';

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
				<MenuLeft />
			</LeftNavbar>
			<Container>
				<FeedContainer>{children}</FeedContainer>
			</Container>
			<ModalImage />
		</LayoutWrapper>
	);
};

export default Layout;
