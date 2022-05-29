import styled from "styled-components";
import LogoWhiteSvg from "@/assets/logos/white.svg";
import LogoBlackSvg from "@/assets/logos/black.svg";
import type IHamburger from "@/interfaces/styles/hamburger";

export const ContainerMobile = styled.div<IHamburger>`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0px;
	left: 0px;

	width: 100vw;
	height: 100vh;

	z-index: 999;
	background-color: ${({ showMenu }) => showMenu && "#00000080"};
	transition: 1s ease-in-out;
`;

export const Container = styled.div<IHamburger>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.default.primary};
	padding: 20px 40px;

	a,
	span {
		font-weight: 500;
		font-size: 20px;
	}

	img,
	svg,
	span,
	a,
	div {
		z-index: 10;
		color: ${({ theme }) => theme.colors.default.tertiary};
	}

	@media (max-width: 780px) {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 100%;
		width: 70%;

		background-color: ${({ theme }) => theme.colors.reverse.primary};
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;

		img,
		svg,
		span,
		a,
		div {
			z-index: 10;
			color: ${({ theme }) => theme.colors.reverse.tertiary};
			margin: 20px 0px;
		}

		animation: 2s forwards
			${({ showMenu }) => (showMenu === false ? "close" : "open")};

		@keyframes open {
			from {
				left: -110%;
			}
			to {
				left: 0px;
			}
		}
		@keyframes close {
			from {
				left: 0px;
			}
			to {
				left: -110%;
			}
		}
	}
`;

export const Hamburger = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-left: 7%;

	background-color: ${({ theme }) => theme.colors.default.primary};
	height: 48px;
	width: 48px;
	border-radius: 24px;

	img {
		height: 32px;
		width: 32px;
	}
`;

export const LogoWhite = styled.img.attrs({
	src: LogoWhiteSvg,
	alt: "",
})`
	height: 48px;
	width: 48px;
`;
export const LogoBlack = styled.img.attrs({
	src: LogoBlackSvg,
	alt: "",
})`
	height: 48px;
	width: 48px;
`;

export const NavBar = styled.nav`
	display: flex;
	justify-content: space-evenly;
	flex: 1;
	padding: 0px 100px;

	@media (max-width: 780px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 0px;
	}
`;

export const Account = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-right: 10px;
	}
`;
