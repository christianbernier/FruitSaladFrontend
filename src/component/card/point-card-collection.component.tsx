import React, {FC} from 'react'
import {PointCard} from "../../model/card/point-card.model";
import {PointCardComponent} from "./point-card.component";

export const PointCardCollectionComponent: FC<{cards: PointCard[]}> = ({cards}) => {
  return <div className={'card-collection'}>
    {cards.map((card) => <PointCardComponent card={card}/>)}
  </div>
}