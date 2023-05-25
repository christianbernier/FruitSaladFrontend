import React, {FC} from 'react'
import {PointCard} from "../../model/card/point-card.model";
import {FruitCard} from "../../model/card/fruit-card.model";
import {PointCardCollectionComponent} from "../card/point-card-collection.component";
import {FruitCardCollectionComponent} from "../card/fruit-card-collection.component";

export const PlayerCardsComponent: FC<{pointCards: PointCard[], fruitCards: FruitCard[]}> = ({pointCards, fruitCards}) => {
  return <>
    <div className={'player-card-collection'}>
      <PointCardCollectionComponent cards={pointCards}/>
      <FruitCardCollectionComponent cards={fruitCards}/>
    </div>
  </>
}