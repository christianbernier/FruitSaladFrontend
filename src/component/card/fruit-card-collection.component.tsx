import React, { FC } from 'react';
import { FruitCard } from './fruit-card.component';
import { FruitCard as FruitCardModel } from '../../model';

export interface FruitCardCollectionParams {
  cards: FruitCardModel[];
}

export const FruitCardCollection: FC<FruitCardCollectionParams> = ({
  cards,
}) => {
  return (
    <div className={'card-collection'}>
      {cards.map((card) => (
        <FruitCard card={card} />
      ))}
    </div>
  );
};
