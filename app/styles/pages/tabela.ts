import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 70px 50px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		font-size: 52px;
		font-weight: 400;
	}

	button {
		font-size: 18px;
		font-weight: 500;
	}
`;

export const Table = styled.table`
	border-collapse: collapse;

	thead {
		background-color: ${({ theme }) => theme.colors.default.primary};
		color: ${({ theme }) => theme.colors.default.tertiary};
	}

	table,
	th,
	td {
		text-align: center;
		padding: 20px;
	}

	img {
		cursor: pointer;
	}
`;
