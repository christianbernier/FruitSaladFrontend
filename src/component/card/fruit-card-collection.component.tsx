import React, { FC } from 'react';
import { FruitCardComponent } from './fruit-card.component';
import { FruitCard } from '../../model';

export const FruitCardCollectionComponent: FC<{ cards: FruitCard[] }> = ({
  cards,
}) => {
  return (
    <div className={'card-collection'}>
      {cards.map((card) => (
        <FruitCardComponent card={card} />
      ))}
    </div>
  );
};
