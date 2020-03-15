import React, { useContext } from 'react';

import './LanguagePack.scss';
import { LanguageContext } from '../../context';
import Backdrop from '../UI/Backdrop/Backdrop';

const Offer = props => {
	const context = useContext(LanguageContext);
	return (
		<React.Fragment>
			<Backdrop show={props.visible} notVisible clicked={props.closed} />
			<div className="language-pack">
				<div className="language-pack__toggler" onClick={props.clicked}>
					<span style={{ pointerEvents: 'none' }}>
						{context.dictionary.language}&nbsp;
						<i
							className={
								props.visible
									? 'fas fa-caret-down language-pack__toggler-icon language-pack__toggler-icon--active '
									: 'fas fa-caret-down language-pack__toggler-icon'
							}
						></i>
					</span>
				</div>
				<div
					className={
						props.visible
							? 'language-pack__dropdown language-pack__dropdown--visible'
							: 'language-pack__dropdown'
					}
					onClick={props.closed}
				>
					<button
						className={
							context.language === 'pl'
								? 'language-pack__select language-pack__select--active'
								: 'language-pack__select'
						}
						onClick={context.changeLanguage}
						data-language="pl"
					>
						Polski
					</button>
					<button
						className={
							context.language === 'en'
								? 'language-pack__select language-pack__select--active'
								: 'language-pack__select'
						}
						onClick={context.changeLanguage}
						data-language="en"
					>
						English
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Offer;
