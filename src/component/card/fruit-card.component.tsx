import React, { FC, useEffect, useState } from 'react';

import '../../styles/card.css';
import { getFruitImage } from '../../util/fruit/fruit-image.util';
import { FruitCard, FruitType } from '../../model';

export const FruitCardComponent: FC<{ card: FruitCard }> = ({ card }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    switch (card.fruit) {
      case FruitType.STRAWBERRY:
        setName('Strawberry');
        break;
      case FruitType.MANGO:
        setName('Mango');
        break;
      case FruitType.BANANA:
        setName('Banana');
        break;
      case FruitType.PEAR:
        setName('Pear');
        break;
      case FruitType.BLUEBERRY:
        setName('Blueberry');
        break;
      case FruitType.GRAPE:
        setName('Grape');
        break;
    }
  }, [card]);

  return (
    <div className={'card-wrapper'}>
      <div className={`card ${card.fruit}`}>
        <div className={'card-name'}>{name}</div>
        <div className={'card-graphic-wrapper'}>
          <img src={getFruitImage(card.fruit)} alt={`${name} card`} />
        </div>
      </div>
    </div>
  );
};
