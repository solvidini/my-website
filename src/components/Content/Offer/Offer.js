import React from "react";

import "./Offer.scss";
import website from "../../../assets/images/website-color.png";
import responsive from "../../../assets/images/responsive-color.png";
import ui from "../../../assets/images/ui-color.png";

const Offer = props => {
  return (
    <section name="section-offer" className="section-offer">
       <h2 className="section-header">
          <span className="section-header__title">
            Oferta
          </span>
          <span className="section-header__post">Co oferuję i na co zwracam uwagę?</span>
        </h2>
      <div className="offer-content">
        <div className="offer-content__item">
          <img
            className="offer-content__item__image"
            src={website}
            alt="Kodowanie stron"
          />
          <h3 className="offer-content__item__title">Tworzenie stron</h3>
          <p className="offer-content__item__description">
            Do tworzenia stron używam najnowszych rozwiązań oraz technologii. Kieruję się współczesnymi trendami, spełniając przy tym wszelkie obecne standardy. Zarówno wygląd jak i układ stron opieram o intuicyjny, ładny interfejs jak i responsywny design.
          </p>
        </div>
        <div className="offer-content__item">
          <img
            className="offer-content__item__image"
            src={responsive}
            alt="Responsywny design"
          />
          <h3 className="offer-content__item__title">Responsywny design</h3>
          <p className="offer-content__item__description">
            Cały wygląd strony jak i jej układ automatycznie dostosowywuje się do okna przeglądarki, na której jest wyświetlany. Strona tworzona w takiej technice jest bardzo uniwersalna, a jej obsługa staje się znacznie wygodniejsza niezależnie od urządzenia, na którym ją wyświetlamy.
          </p>
        </div>
        <div className="offer-content__item">
          <img
            className="offer-content__item__image"
            src={ui}
            alt="Intuicyjny interfejs"
          />
          <h3 className="offer-content__item__title">Intuicyjny interfejs</h3>
          <p className="offer-content__item__description">
            Wszelkie elementy strony rozmieszczam w sposób intuicyjny dla użytkownika, aby poruszanie się po stronie niezależnie od urządzenia było proste i przyjemne. Ponadto oferuję nowoczesny, ciekawy wygląd jak i dbam o wszelkie detale dotyczące m.in. animacji elementów, by sposób użytkowania był jasny i zrozumiały.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
