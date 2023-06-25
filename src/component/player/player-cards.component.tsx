import React, { FC } from 'react';
import { PointCardCollection } from '../card/point-card-collection.component';
import { FruitCardCollection } from '../card/fruit-card-collection.component';
import { FruitCard, PointCard } from '../../model';

export interface PlayerCardsParams {
  pointCards: PointCard[];
  fruitCards: FruitCard[];
}

export const PlayerCards: FC<PlayerCardsParams> = ({
  pointCards,
  fruitCards,
}) => {
  return (
    <>
      <div className={'player-card-collection'}>
        <PointCardCollection cards={pointCards} />
        <FruitCardCollection cards={fruitCards} />
      </div>
    </>
  );
};
