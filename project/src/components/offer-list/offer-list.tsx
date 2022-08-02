import { useState } from 'react';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: Offers;
  cardMods: string;
}

function OfferList({offers, cardMods}: OfferListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<string | undefined>(undefined);

  let listClass : string;

  if (cardMods === 'favorite') {
    listClass = 'favorites__places';
  } else if (cardMods === 'near-places') {
    listClass = 'near-places__list places__list';
  } else {
    listClass = 'cities__places-list places__list tabs__content';
  }

  return (
    <div className={listClass}>
      {offers.map((offer) => {
        const keyValue = offer.id.toString();

        return(
          <PlaceCard
            key={keyValue}
            offer={offer}
            isActive={keyValue === activeCard}
            onCardMouseMove ={ () => setActiveCard(keyValue)}
            cardMods={cardMods}
          />
        );
      })}
    </div>
  );
}

export default OfferList;
