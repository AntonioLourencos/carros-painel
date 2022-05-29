import styled, { css } from "styled-components";
import type IButton from "@/interfaces/styles/button";

export const Container = styled.div<IButton>`
	background-color: ${({ theme }) => theme.colors.default.primary};
	padding: 5px 10px;
	border-radius: 8px;
	font-size: 18px;
	cursor: pointer;

	* {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.default.tertiary};
		border: none;
		outline: none;
	}

	${({ reverseColor }) =>
		reverseColor &&
		css`
			background-color: ${({ theme }) => theme.colors.reverse.primary};

			* {
				color: ${({ theme }) => theme.colors.reverse.tertiary};
			}
		`}

	${({ showBorder }) =>
		showBorder &&
		css`
			border: 1px solid ${({ theme }) => theme.colors.default.primary};
		`}

	${({ ghost }) =>
		ghost &&
		css`
			background-color: transparent;

			* {
				color: ${({ theme }) => theme.colors.reverse.primary};
			}
		`}

	${({ showReverseBorder }) =>
		showReverseBorder &&
		css`
			border: 1px solid ${({ theme }) => theme.colors.reverse.primary};
		`}

		button {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
