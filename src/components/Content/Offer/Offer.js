import React from "react";

import "./Offer.scss";
import website from "../../../assets/images/website-color.png";
import responsive from "../../../assets/images/responsive-color.png";
import ui from "../../../assets/images/ui-color.png";

const Offer = props => {
  return (
    <section name="section-offer" className="section-offer">
      <h2 className="section-header">
        <span className="section-header__title">Oferta</span>
        <span className="section-header__post">
          Co oferuję i&nbsp;na&nbsp;co zwracam uwagę?
        </span>
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
            Do&nbsp;tworzenia stron używam najnowszych rozwiązań oraz technologii.
            Kieruję się&nbsp;współczesnymi trendami, spełniając przy tym wszelkie
            obecne standardy. Zarówno wygląd jak i&nbsp;układ stron opieram
            o&nbsp;intuicyjny, ładny interfejs jak i&nbsp;responsywny design.
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
            Cały wygląd strony jak i&nbsp;jej układ automatycznie dostosowywuje
            się&nbsp;do&nbsp;okna przeglądarki, na&nbsp;której jest wyświetlany. Strona
            tworzona w&nbsp;takiej technice jest bardzo uniwersalna, a&nbsp;jej obsługa
            staje się&nbsp;znacznie wygodniejsza niezależnie od&nbsp;urządzenia,
            na&nbsp;którym ją wyświetlamy.
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
            Wszelkie elementy strony rozmieszczam w&nbsp;sposób intuicyjny dla
            użytkownika, aby&nbsp;poruszanie się&nbsp;po stronie niezależnie
            od&nbsp;urządzenia było proste i&nbsp;przyjemne. Ponadto oferuję
            nowoczesny, ciekawy wygląd jak i&nbsp;dbam o&nbsp;wszelkie detale
            dotyczące m.in. animacji elementów, by&nbsp;sposób użytkowania był jasny
            i&nbsp;zrozumiały.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
