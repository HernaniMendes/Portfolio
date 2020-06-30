import React from 'react';

import { Link } from 'react-scroll';

import { Container } from './styles';

function Header() {
	return (
		<Container>
			<div className="cabecalho">
				<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
					<h1>HERNANI MENDES</h1>
				</Link>

				<div className="lista">
					<ul>
						<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
							<li>ABOUT</li>
						</Link>
						<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
							<li>PORTFOLIO</li>
						</Link>
						<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-2} duration={500}>
							<li>CONTACT</li>
						</Link>
					</ul>
				</div>
			</div>
		</Container>
	);
}

export default Header;
