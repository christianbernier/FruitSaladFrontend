import React from 'react';
import { FruitCardCollection } from '../component/card/fruit-card-collection.component';
import { PointCardCollection } from '../component/card/point-card-collection.component';
import { Button, ButtonType } from '../component/button/button.component';
import { FruitCard, FruitType, PointCard, PointCardType } from '../model';

export const PlaygroundPage = () => {
  return (
    <>
      <Button
        type={ButtonType.PRIMARY}
        text={'Action'}
        onClick={() => undefined}
      />
      <Button
        type={ButtonType.SECONDARY}
        text={'Action'}
        onClick={() => undefined}
      />
      <Button
        type={ButtonType.PRIMARY}
        disabled={true}
        text={'Action'}
        onClick={() => undefined}
      />
      <Button
        type={ButtonType.SECONDARY}
        disabled={true}
        text={'Action'}
        onClick={() => undefined}
      />
      <FruitCardCollection
        cards={
          [
            { fruit: FruitType.STRAWBERRY },
            { fruit: FruitType.MANGO },
            { fruit: FruitType.BANANA },
            { fruit: FruitType.PEAR },
            { fruit: FruitType.BLUEBERRY },
            { fruit: FruitType.GRAPE },
          ] as FruitCard[]
        }
      />
      <PointCardCollection
        cards={
          [
            {
              pointType: PointCardType.LINEAR,
              fruitTypes: [FruitType.STRAWBERRY, FruitType.BANANA],
              pointValues: [3, 2],
              reverseFruit: FruitType.GRAPE,
            },
            {
              pointType: PointCardType.LINEAR,
              fruitTypes: [
                FruitType.STRAWBERRY,
                FruitType.BANANA,
                FruitType.GRAPE,
              ],
              pointValues: [3, 2, -4],
              reverseFruit: FruitType.PEAR,
            },
            {
              pointType: PointCardType.SAME_SET,
              fruitTypes: [FruitType.STRAWBERRY, FruitType.STRAWBERRY],
              pointValues: [5],
              reverseFruit: FruitType.BLUEBERRY,
            },
            {
              pointType: PointCardType.DIFF_SET,
              fruitTypes: [FruitType.BANANA, FruitType.MANGO, FruitType.PEAR],
              pointValues: [8],
              reverseFruit: FruitType.BANANA,
            },
            {
              pointType: PointCardType.FEWEST_OF_TYPE,
              fruitTypes: [FruitType.BANANA],
              pointValues: [7],
              reverseFruit: FruitType.GRAPE,
            },
            {
              pointType: PointCardType.MOST_OF_TYPE,
              fruitTypes: [FruitType.MANGO],
              pointValues: [7],
              reverseFruit: FruitType.STRAWBERRY,
            },
            {
              pointType: PointCardType.MOST_FRUIT,
              fruitTypes: [],
              pointValues: [10],
              reverseFruit: FruitType.GRAPE,
            },
            {
              pointType: PointCardType.FEWEST_FRUIT,
              fruitTypes: [],
              pointValues: [7],
              reverseFruit: FruitType.PEAR,
            },
            {
              pointType: PointCardType.MISSING_TYPE,
              fruitTypes: [],
              pointValues: [5],
              reverseFruit: FruitType.BANANA,
            },
            {
              pointType: PointCardType.AT_LEAST_2,
              fruitTypes: [],
              pointValues: [3],
              reverseFruit: FruitType.STRAWBERRY,
            },
            {
              pointType: PointCardType.AT_LEAST_3,
              fruitTypes: [],
              pointValues: [5],
              reverseFruit: FruitType.BLUEBERRY,
            },
            {
              pointType: PointCardType.EVEN_ODD,
              fruitTypes: [FruitType.GRAPE],
              pointValues: [7, 3],
              reverseFruit: FruitType.STRAWBERRY,
            },
            {
              pointType: PointCardType.FRUIT_SALAD,
              fruitTypes: [
                FruitType.STRAWBERRY,
                FruitType.MANGO,
                FruitType.BANANA,
                FruitType.PEAR,
                FruitType.BLUEBERRY,
                FruitType.GRAPE,
              ],
              pointValues: [12],
              reverseFruit: FruitType.STRAWBERRY,
            },
          ] as PointCard[]
        }
      />
    </>
  );
};
