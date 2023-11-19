import {OfferPreviewProps } from '../../types/Offers.type';

type OffersListNeighbourhoodProp={
  offers: OfferPreviewProps;
}

function OffersListNeighbourhood ({offers}: OffersListNeighbourhoodProp) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {/* {как мне выделить только офееры для превьюшек?} */}
        {offers.map((offerPreview) => (
          <PlaceCardComponent
            offer={offerPreview}
            key={offerPreview.id}
            onCardHover={handleCardHover}
          />
        ))}
      </div>
    </section>
  );
}

export { OffersListNeighbourhood };
