import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f0e8e8;
	margin-top: 90px;

	
	h1 {
		text-align: center;
	}

	.contact-box {
		display: flex;
		margin: 0 auto;
		align-items: center;
		width: 1440px;
		height: 390px;
		justify-content: center;
	}

	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}

	.box img {
		width: 96px;
		height: 96px;
		margin-left: 40px;
	}

	.box h1 {
		margin-top: 10px;
		margin-left: 40px;
	}

	.box span {
		margin-top: 10px;
		margin-left: 40px;
	}
`;
