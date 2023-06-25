import React, { FC } from 'react';

import '../../styles/card.css';
import { getFruitImage } from '../../util/fruit/fruit-image.util';
import { FruitCard as FruitCardModel, FruitType } from '../../model';

export interface FruitCardParams {
  card: FruitCardModel;
}

export const FruitCard: FC<FruitCardParams> = ({ card }) => {
  let name = '';

  switch (card.fruit) {
    case FruitType.STRAWBERRY:
      name = 'Strawberry';
      break;
    case FruitType.MANGO:
      name = 'Mango';
      break;
    case FruitType.BANANA:
      name = 'Banana';
      break;
    case FruitType.PEAR:
      name = 'Pear';
      break;
    case FruitType.BLUEBERRY:
      name = 'Blueberry';
      break;
    case FruitType.GRAPE:
      name = 'Grape';
      break;
  }

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
