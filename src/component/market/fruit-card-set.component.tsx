import React, {FC} from 'react';
import {FruitCard} from "../../model/card/fruit-card.model";
import {FruitCardComponent} from "../card/fruit-card.component";
import {EmptyCardComponent} from "../card/empty-card.component";

export const FruitCardSetComponent: FC<{cards: (FruitCard | null)[]}> = ({cards}) => {
  return <>
    <div className={'fruit-card-set-container'}>
      {cards.map((card) => {
        if (card) {
          return <FruitCardComponent card={card}/>;
        } else {
          return <EmptyCardComponent/>;
        }
      })}
    </div>
  </>
}