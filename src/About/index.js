import React from 'react';
import { Container } from './styles';
import nani from '../assets/hernani.jpeg';

export default function index() {
	return (
		<Container>
			<div className="aboutBox" id="about">
				<img src={nani} alt="Foto-perfil" />

				<div className="text" id="about">
					<h1>ABOUT ME</h1>
					<p>
						Sou Hernani, estudante do curso de Engenharia Informatica e Sistemas Computacionais, no ano 2017/2018 foi
						finalista nas olimpiadas de programaçao da minha universidade e desde entao tenho vindo a
						aprender e a desenvolver a minha capacidade de resolver problemas na area de redes e
						programaçao.
					</p>
				</div>
			</div>
		</Container>
	);
}
