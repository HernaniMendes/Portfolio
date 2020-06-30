import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f0e8e8;

	margin-top: -90px;

	.aboutBox {
		display: flex;
		align-items: center;
		max-width: 1300px;
		height: 770px;
		margin: 0 auto;
	}

	.aboutBox img {
		width: 398px;
		height: 511px;
		border-radius: 8px;
	}

	.text {
		margin-left: 50px;
		position: relative;
	}

	.text h1 {
		position: absolute;
		text-align: center;
		border-bottom: 5px solid black;
		left: 350px;
		top: -50px;
		font-size: 24px;
	}

	.text p {
		margin-top: 10px;
		font-size: 18px;
		text-align: center;
	}
`;
