import styled from "styled-components";

export const Form = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;

	@media (max-width: 890px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: auto;
	}
`;
export const Left = styled.div`
	display: flex;
	flex-direction: column;

	img {
		height: 225px;
		width: 225px;
		object-fit: cover;
	}

	label {
		display: flex;
		flex-direction: column;

		span {
			font-size: 16px;
			font-weight: 500;
			margin-top: 20px;
			cursor: pointer;
		}
	}

	input {
		display: none;
	}
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Field = styled.div`
	display: flex;
	flex-direction: column;

	input {
		padding: 10px;
		margin: 10px 0px;
		width: 25vw;

		border: 1px solid ${({ theme }) => theme.colors.default.primary};
		outline: none;

		@media (max-width: 890px) {
			width: 100%;
		}
	}
`;
