import * as Styles from "@/styles/components/header";
import React from "react";
import Profile from "@/assets/handle_icons/profile.svg";
import useDimensions from "@/hooks/useDimensions";
import HamburgerSvg from "@/assets/handle_icons/hamburger.svg";
import { Link, useLocation } from "@remix-run/react";
import { useTheme } from "styled-components";

const Header = () => {
	const { width } = useDimensions();
	const location = useLocation();
	const theme = useTheme();

	const [showMenu, setShowMenu] = React.useState<boolean>(false);

	const NavBarOptions = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/#sobre",
			name: "Sobre",
		},
		{
			path: "/tabela",
			name: "Tabela",
		},
		{
			path: "/fale-conosco",
			name: "Fale conosco",
		},
	];

	if (width < 780) {
		return (
			<Styles.ContainerMobile showMenu={showMenu}>
				<Styles.Hamburger
					onClick={() => {
						setShowMenu(!showMenu);
					}}
				>
					<img src={HamburgerSvg} alt="" />
				</Styles.Hamburger>

				<Styles.Container
					showMenu={showMenu}
					onClick={() => setShowMenu(!showMenu)}
				>
					<Link to="/">
						<Styles.LogoBlack />
					</Link>
					<Styles.NavBar>
						{NavBarOptions.map((route, key) => {
							return (
								<Link
									to={route.path}
									onClick={() => setShowMenu(!showMenu)}
									key={key}
									{...(location.pathname + location.hash === route.path && {
										style: {
											borderBottom: `1px solid ${theme.colors.default.primary}`,
										},
									})}
								>
									{route.name}
								</Link>
							);
						})}
					</Styles.NavBar>
					<Link to={{ pathname: "/tabela", search: "logged=true" }}>
						<Styles.Account>
							<span>Entrar</span>
						</Styles.Account>
					</Link>
				</Styles.Container>
			</Styles.ContainerMobile>
		);
	}

	return (
		<Styles.Container>
			<Link to="/">
				<Styles.LogoWhite />
			</Link>
			<Styles.NavBar>
				{NavBarOptions.map((route, key) => {
					return (
						<Link to={route.path} key={key}>
							{route.name}
						</Link>
					);
				})}
			</Styles.NavBar>
			<Link to={{ pathname: "/tabela", search: "logged=true" }}>
				<Styles.Account>
					<span>Entrar</span>
					<img src={Profile} alt="Logo" />
				</Styles.Account>
			</Link>
		</Styles.Container>
	);
};

export default Header;
