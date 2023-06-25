import React, { FC } from 'react';
import { PointCardCollectionComponent } from '../card/point-card-collection.component';
import { FruitCardCollectionComponent } from '../card/fruit-card-collection.component';
import { FruitCard, PointCard } from '../../model';

export const PlayerCardsComponent: FC<{
  pointCards: PointCard[];
  fruitCards: FruitCard[];
}> = ({ pointCards, fruitCards }) => {
  return (
    <>
      <div className={'player-card-collection'}>
        <PointCardCollectionComponent cards={pointCards} />
        <FruitCardCollectionComponent cards={fruitCards} />
      </div>
    </>
  );
};
