import React, { FC } from 'react';
import { PointCardComponent } from './point-card.component';
import { PointCard } from '../../model';

export const PointCardCollectionComponent: FC<{ cards: PointCard[] }> = ({
  cards,
}) => {
  return (
    <div className={'card-collection'}>
      {cards.map((card) => (
        <PointCardComponent card={card} />
      ))}
    </div>
  );
};
