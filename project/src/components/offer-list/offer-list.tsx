import { useState } from 'react';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers}: OfferListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<string | undefined>(undefined);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;

        return(
          <PlaceCard
            key={keyValue}
            offer={offer}
            isActive={offer.id === activeCard}
            onCardMouseMove ={ () => setActiveCard(offer.id) }
          />
        );
      })}
    </div>
  );
}

export default OfferList;
