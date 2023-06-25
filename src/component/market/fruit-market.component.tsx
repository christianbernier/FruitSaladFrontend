import React, {FC, useContext} from 'react'
import {PointCardSetComponent} from "./point-card-set.component";
import {FruitCardSetComponent} from "./fruit-card-set.component";
import { PlayContext } from '../../state/play/play.context';

export const FruitMarketComponent: FC = () => {
  const playState = useContext(PlayContext);
  const { pointCards, fruitCards } = playState.fruitMarket;

  return <>
    <div className={'fruit-market'}>
      <PointCardSetComponent cards={pointCards}/>
      <FruitCardSetComponent cards={fruitCards}/>
    </div>
  </>
}