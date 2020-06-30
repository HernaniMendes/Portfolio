import React from 'react';
import ReactPlayer from 'react-player';

import { Container } from './styles';

function Portfolio() {
	return (
		<Container>
			<div className="portfolioBox" id="portfolio">
				<h1>PORTFOLIO</h1>
				<div className="cardBox">
					<ReactPlayer className="card" url="https://www.youtube.com/watch?v=6I-TGSZENWk" />
					<ReactPlayer url="https://www.youtube.com/watch?v=u2--JJCQp7k" />
					<ReactPlayer url="https://www.youtube.com/watch?v=560ADiVqZe8" />
				</div>
			</div>
		</Container>
	);
}

export default Portfolio;
