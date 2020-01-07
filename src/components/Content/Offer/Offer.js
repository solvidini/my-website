import React, { useContext } from 'react';

import './Offer.scss';
import website from '../../../assets/images/website-color.png';
import responsive from '../../../assets/images/responsive-color.png';
import ui from '../../../assets/images/ui-color.png';
import { LanguageContext } from '../../../context';
import Effect from 'react-reveal/Fade';

const Offer = props => {
	const context = useContext(LanguageContext);
	return (
		<section name="section-offer" className="section-offer">
			<h2 className="section-header section-header--white">
				<span className="section-header__title">{context.dictionary.offer.title}</span>
				<span className="section-header__post">{context.dictionary.offer.post}</span>
			</h2>
			<div className="offer-content">
				<Effect left>
					<div className="offer-content__item">
						<img className="offer-content__item__image" src={website} alt="Kodowanie stron" />
						<h3 className="offer-content__item__title">{context.dictionary.offer.makingWebsites.title}</h3>
						<p className="offer-content__item__description">
							{context.dictionary.offer.makingWebsites.description}
						</p>
					</div>
				</Effect>
				<Effect>
					<div className="offer-content__item">
						<img className="offer-content__item__image" src={responsive} alt="Responsywny design" />
						<h3 className="offer-content__item__title">
							{context.dictionary.offer.responsiveDesign.title}
						</h3>
						<p className="offer-content__item__description">
							{context.dictionary.offer.responsiveDesign.description}
						</p>
					</div>
				</Effect>
				<Effect right>
					<div className="offer-content__item">
						<img className="offer-content__item__image" src={ui} alt="Intuicyjny interfejs" />
						<h3 className="offer-content__item__title">
							{context.dictionary.offer.intuitiveInterface.title}
						</h3>
						<p className="offer-content__item__description">
							{context.dictionary.offer.intuitiveInterface.description}
						</p>
					</div>
				</Effect>
			</div>
		</section>
	);
};

export default Offer;
