import React, {FC, useEffect, useState} from 'react'
import {FruitCard} from "../../model/card/fruit-card.model";

import '../../styles/card.css'
import {FruitType} from "../../model/fruit.model";
import {getFruitImage} from "../../util/fruit/fruit-image.util";

export const FruitCardComponent: FC<{ card: FruitCard }> = ({card}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    switch(card.type) {
      case FruitType.STRAWBERRY: setName('Strawberry'); break;
      case FruitType.MANGO: setName('Mango'); break;
      case FruitType.BANANA: setName('Banana'); break;
      case FruitType.PEAR: setName('Pear'); break;
      case FruitType.BLUEBERRY: setName('Blueberry'); break;
      case FruitType.GRAPE: setName('Grape'); break;
    }
  }, [card]);

  return <div className={'card-wrapper'}>
    <div className={`card ${card.type}`}>
      <div className={'card-name'}>{name}</div>
      <div className={'card-graphic-wrapper'}>
        <img src={getFruitImage(card.type)} alt={`${name} card`}/>
      </div>
    </div>
  </div>
}