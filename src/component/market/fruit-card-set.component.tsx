import React, { FC } from 'react';
import { FruitCard } from '../card/fruit-card.component';
import { EmptyCard } from '../card/empty-card.component';
import { FruitCard as FruitCardModel } from '../../model';

export interface FruitCardSetParams {
  cards: (FruitCardModel | null)[];
}

export const FruitCardSet: FC<FruitCardSetParams> = ({ cards }) => {
  return (
    <>
      <div className={'fruit-card-set-container'}>
        {cards.map((card) => {
          if (card) {
            return <FruitCard card={card} />;
          } else {
            return <EmptyCard />;
          }
        })}
      </div>
    </>
  );
};
