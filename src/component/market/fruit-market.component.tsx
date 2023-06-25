import React, { FC, useContext } from 'react';
import { PointCardSet } from './point-card-set.component';
import { FruitCardSet } from './fruit-card-set.component';
import { PlayContext } from '../../state/play/play.context';

export const FruitMarket: FC = () => {
  const playState = useContext(PlayContext);
  const { pointCards, fruitCards } = playState.fruitMarket;

  return (
    <>
      <div className={'fruit-market'}>
        <PointCardSet cards={pointCards} />
        <FruitCardSet cards={fruitCards} />
      </div>
    </>
  );
};
