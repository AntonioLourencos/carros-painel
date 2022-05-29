import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	img {
		height: 24px;
		width: 24px;
		cursor: pointer;
	}
`;

export const Body = styled.div`
	position: relative;
	padding: 20px;
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	margin-top: 20px;
`;
