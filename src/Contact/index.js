import React from 'react';

import { Container } from './styles';
import phone from '../assets/ligar.png';
import email from '../assets/enviar.png';

function Contact() {
	return (
		<Container>
			
			<h1>CONTACT</h1>
			<div className="contact-box" id="contact">
				<div className="box">
					<img src={phone} alt="telefone" />
					<h1>telefone</h1>
					<span>9738689</span>
				</div>

				<div className="box">
					<img src={email} alt="email" />
					<h1>E-mail</h1>
					<span>nanimendes2323@gmail.com</span>
				</div>
			</div>
		</Container>
	);
}

export default Contact;
