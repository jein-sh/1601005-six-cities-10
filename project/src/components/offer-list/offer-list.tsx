import { useState } from 'react';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers}: OfferListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState(-1);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;

        return(
          <PlaceCard
            key={keyValue}
            offer= {offer}
            isActive={id === activeCard}
            onCardMouseMove = {() => setActiveCard(activeCard === id ? -1 : id)}
          />
        );
      })}
    </div>
  );
}

export default OfferList;
