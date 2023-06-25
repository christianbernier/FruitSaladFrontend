import { FruitType } from '../../model/fruit.model';

import Strawberry from '../../../assets/fruit/strawberry.svg';
import Mango from '../../../assets/fruit/mango.svg';
import Banana from '../../../assets/fruit/banana.svg';
import Pear from '../../../assets/fruit/pear.svg';
import Blueberries from '../../../assets/fruit/blueberries.svg';
import Grape from '../../../assets/fruit/grapes.svg';

export const getFruitImage = (type: FruitType) => {
  switch (type) {
    case FruitType.STRAWBERRY:
      return Strawberry;
    case FruitType.MANGO:
      return Mango;
    case FruitType.BANANA:
      return Banana;
    case FruitType.PEAR:
      return Pear;
    case FruitType.BLUEBERRY:
      return Blueberries;
    case FruitType.GRAPE:
      return Grape;
  }
};
