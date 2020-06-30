import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f0e8e8;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;

	.cabecalho {
		height: 60px;
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 24px;
		cursor: pointer;
	}

	.lista {
	}

	.lista ul {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lista ul li {
		margin-right: 30px;
		font-weight: bold;
	}
`;
