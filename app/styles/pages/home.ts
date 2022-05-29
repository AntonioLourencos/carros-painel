import styled from "styled-components";
import BackgroundLanding from "@/assets/background/landing.png";

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;

	@media (max-width: 780px) {
		position: inherit;
	}
`;

export const Landing = styled.img.attrs({
	src: BackgroundLanding,
	alt: "",
})`
	min-height: 115vh;
	width: 100%;
	object-fit: cover;

	@media (max-width: 780px) {
		min-height: auto + 10%;
		width: auto + 10%;
	}
`;

export const Cars = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 100px 50px;
`;

export const CarContainer = styled.div`
	margin: 0px 25px;

	.imageUpBox {
		width: 250px;
		height: 140px;
		transform: translate(15px, 10px);
		object-fit: cover;
	}
`;

export const Car = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.colors.default.primary};
	border-radius: 24px;
	width: 280px;
	padding: 20px 10px;

	.title {
		text-align: center;
		font-weight: 400;
		font-size: 24px;
	}

	div {
		display: flex;
		align-items: center;
		margin: 10px 15px;

		img {
			margin-right: 10px;
		}
	}

	button {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 16px;
		padding: 5px;
		width: 100%;
	}
`;

export const About = styled.div`
	position: relative;
	margin: 0px;

	img {
		width: 100%;
		object-fit: cover;
		filter: brightness(60%);

		@media (max-width: 780px) {
			height: 80%;
		}

		@media (max-width: 560px) {
			height: 100%;
		}
	}

	.BlurContainer {
		position: absolute;
		display: flex;
		justify-content: flex-end;
		top: 0px;
		width: 100%;
		height: 99.5%;
		z-index: 10;
		margin: 0px;

		.Blur {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			width: 50%;
			padding: 0px 50px;
			backdrop-filter: blur(5px);
			background: linear-gradient(
				270deg,
				rgba(29, 37, 39, 0.6) 0%,
				rgba(29, 37, 39, 0.6) 24.79%,
				rgba(29, 37, 39, 0.534) 54.48%,
				rgba(29, 37, 39, 0.006) 78.67%,
				rgba(29, 37, 39, 0) 100%
			);
			span {
				color: ${({ theme }) => theme.colors.default.tertiary};
				font-weight: 400;
				font-size: 56px;
			}

			p {
				color: ${({ theme }) => theme.colors.default.tertiary};
				text-align: right;
				font-weight: 300;
				font-size: 18px;
				margin: 20px 0px;
			}

			button {
				font-weight: 500;
				font-size: 16px;
			}
		}

		* {
			z-index: 10;
		}

		@media (max-width: 890px) {
			height: 60%;

			.Blur {
				width: 100%;
				background: transparent;
				backdrop-filter: none;
			}
		}

		@media (max-width: 560px) {
			height: 100%;

			span {
				font-size: 36px;
			}

			p {
				font-size: 14px;
			}

			button {
				font-size: 14px;
			}
		}
	}
`;
