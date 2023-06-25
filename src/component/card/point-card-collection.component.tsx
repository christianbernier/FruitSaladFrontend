import React, { FC } from 'react';
import { PointCard } from './point-card.component';
import { PointCard as PointCardModel } from '../../model';

export interface PointCardCollectionParams {
  cards: PointCardModel[];
}

export const PointCardCollection: FC<PointCardCollectionParams> = ({
  cards,
}) => {
  return (
    <div className={'card-collection'}>
      {cards.map((card) => (
        <PointCard card={card} />
      ))}
    </div>
  );
};
