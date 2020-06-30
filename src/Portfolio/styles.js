import styled from 'styled-components';

export const Container = styled.div`
	

	h1 {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.cardBox {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-left: 8px;
	}

	.card {
		background-color: #c4c4c4;
		margin: 0 auto;
		width: 442px;
		height: 272px;
		border-radius: 8px;
		align-items: center;
	}
`;
