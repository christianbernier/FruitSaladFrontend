import React, {FC} from 'react'
import {FruitCard} from "../../model/card/fruit-card.model";
import {FruitCardComponent} from "./fruit-card.component";

export const FruitCardCollectionComponent: FC<{cards: FruitCard[]}> = ({cards}) => {
  return <div className={'card-collection'}>
    {cards.map((card) => <FruitCardComponent card={card}/>)}
  </div>
}