import React from 'react';

import './Footer.scss';

const Footer = props => {
	const currentDate = new Date().getFullYear();

	return (
		<footer className="footer" name="section-contact">
			<div className="footer__square footer__square--top" />
			<div className="footer__top">
				<div className="footer__top__logo">&nbsp;</div>
				<div className="footer__top__item">
					<h4>
						Kontakt <i className="far fa-envelope"></i>
					</h4>
					<span>
						contact@samuelk.pl
						<a href="mailto:contact@samuelk.pl" style={{ fontSize: '1.8rem' }}>
							{' '}
							&rarr;
						</a>
					</span>
					<span>
						samukedo@gmail.com
						<a href="mailto:samukedo@gmail.com" style={{ fontSize: '1.8rem' }}>
							{' '}
							&rarr;
						</a>
					</span>
				</div>
				<div className="footer__top__item">
					<h4>
						CV <i className="far fa-address-card"></i>
					</h4>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://docs.google.com/document/d/1KyYiSiBsq8Lc8nhOA8K3UFCMr0r5hVnkSdl9uidR8Lc/edit?usp=sharing"
						title="Curriculum vitae PL"
					>
						Curriculum vitae PL
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://docs.google.com/document/d/1lmQmuafOFvkSBoKYF8b_ny6XoHf_qqf0jZlUhjwYnss/edit?usp=sharing"
						title="Curriculum vitae ENG"
					>
						Curriculum vitae ENG
					</a>
				</div>
				<div className="footer__top__item" style={{ lineHeight: '1.6' }}>
					Offer icons made by{' '}
					<span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.flaticon.com/authors/freepik"
							title="Freepik"
						>
							Freepik
						</a>
						,
					</span>
					<span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.flaticon.com/authors/elias-bikbulatov"
							title="Elias Bikbulatov"
						>
							Elias Bikbulatov
						</a>
					</span>
					<span>
						from{' '}
						<a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>
					</span>
				</div>
			</div>
			<div className="footer__social">
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="footer__social__link"
					href="https://www.linkedin.com/in/samuel-k%C4%99dziora-b45b86159/"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="footer__social__link"
					href="https://github.com/ssazero"
				>
					<i className="fab fa-github"></i>
				</a>
			</div>

			<div className="footer__copyright">
				<div className="footer__square footer__square--copyright" />
				<span className="no-wrap">
					Samuel Kędziora &nbsp;&copy; <b>{currentDate}</b>
				</span>
				<span className="no-wrap">Wszelkie prawa zastrzeżone.</span>
			</div>
		</footer>
	);
};

export default Footer;
