import React, {FC} from 'react'
import {FruitCard} from "../../model/card/fruit-card.model";
import {PointCard} from "../../model/card/point-card.model";
import {PointCardSetComponent} from "./point-card-set.component";
import {FruitCardSetComponent} from "./fruit-card-set.component";

export const FruitMarketComponent: FC<{pointCards: (PointCard | null)[], fruitCards: (FruitCard | null)[]}> = ({pointCards, fruitCards}) => {
  return <>
    <div className={'fruit-market'}>
      <PointCardSetComponent cards={pointCards}/>
      <FruitCardSetComponent cards={fruitCards}/>
    </div>
  </>
}