import React from 'react'
import {FruitType} from "../model/fruit.model";
import {FruitCardCollectionComponent} from "../component/card/fruit-card-collection.component";
import {PointCardType} from "../model/card/point-card-type.model";
import {PointCardCollectionComponent} from "../component/card/point-card-collection.component";
import {FruitMarketComponent} from "../component/market/fruit-market.component";
import {Button, ButtonType} from "../component/button/button.component";

export const PlaygroundPage = () => {
  return <>
    <Button type={ButtonType.PRIMARY} disabled={false} text={'Action'}/>
    <Button type={ButtonType.SECONDARY} disabled={false} text={'Action'}/>
    <Button type={ButtonType.PRIMARY} disabled={true} text={'Action'}/>
    <Button type={ButtonType.SECONDARY} disabled={true} text={'Action'}/>
    <FruitCardCollectionComponent cards={[
      {type: FruitType.STRAWBERRY},
      {type: FruitType.MANGO},
      {type: FruitType.BANANA},
      {type: FruitType.PEAR},
      {type: FruitType.BLUEBERRY},
      {type: FruitType.GRAPE},
    ]}/>
    <PointCardCollectionComponent cards={[
      {
        pointType: PointCardType.LINEAR,
        fruitTypes: [FruitType.STRAWBERRY, FruitType.BANANA],
        pointValues: [3, 2],
        reverseType: FruitType.GRAPE,
      },
      {
        pointType: PointCardType.LINEAR,
        fruitTypes: [FruitType.STRAWBERRY, FruitType.BANANA, FruitType.GRAPE],
        pointValues: [3, 2, -4],
        reverseType: FruitType.PEAR,
      },
      {
        pointType: PointCardType.SAME_SET,
        fruitTypes: [FruitType.STRAWBERRY, FruitType.STRAWBERRY],
        pointValues: [5],
        reverseType: FruitType.BLUEBERRY,
      },
      {
        pointType: PointCardType.DIFF_SET,
        fruitTypes: [FruitType.BANANA, FruitType.MANGO, FruitType.PEAR],
        pointValues: [8],
        reverseType: FruitType.BANANA,
      },
      {
        pointType: PointCardType.FEWEST_OF_TYPE,
        fruitTypes: [FruitType.BANANA],
        pointValues: [7],
        reverseType: FruitType.GRAPE,
      },
      {
        pointType: PointCardType.MOST_OF_TYPE,
        fruitTypes: [FruitType.MANGO],
        pointValues: [7],
        reverseType: FruitType.STRAWBERRY,
      },
      {
        pointType: PointCardType.MOST_FRUIT,
        fruitTypes: [],
        pointValues: [10],
        reverseType: FruitType.GRAPE,
      },
      {
        pointType: PointCardType.FEWEST_FRUIT,
        fruitTypes: [],
        pointValues: [7],
        reverseType: FruitType.PEAR,
      },
      {
        pointType: PointCardType.MISSING_TYPE,
        fruitTypes: [],
        pointValues: [5],
        reverseType: FruitType.BANANA,
      },
      {
        pointType: PointCardType.AT_LEAST_2,
        fruitTypes: [],
        pointValues: [3],
        reverseType: FruitType.STRAWBERRY,
      },
      {
        pointType: PointCardType.AT_LEAST_3,
        fruitTypes: [],
        pointValues: [5],
        reverseType: FruitType.BLUEBERRY,
      },
      {
        pointType: PointCardType.EVEN_ODD,
        fruitTypes: [FruitType.GRAPE],
        pointValues: [7, 3],
        reverseType: FruitType.STRAWBERRY,
      },
      {
        pointType: PointCardType.FRUIT_SALAD,
        fruitTypes: [FruitType.STRAWBERRY, FruitType.MANGO, FruitType.BANANA, FruitType.PEAR, FruitType.BLUEBERRY, FruitType.GRAPE],
        pointValues: [12],
        reverseType: FruitType.STRAWBERRY,
      }
    ]}/>
    <br/>
    {/* <FruitMarketComponent pointCards={[
      {
        pointType: PointCardType.DIFF_SET,
        fruitTypes: [FruitType.BANANA, FruitType.MANGO, FruitType.PEAR],
        pointValues: [8],
        reverseType: FruitType.BANANA,
      },
      {
        pointType: PointCardType.FRUIT_SALAD,
        fruitTypes: [FruitType.STRAWBERRY, FruitType.MANGO, FruitType.BANANA, FruitType.PEAR, FruitType.BLUEBERRY, FruitType.GRAPE],
        pointValues: [12],
        reverseType: FruitType.STRAWBERRY,
      },
      {
        pointType: PointCardType.AT_LEAST_3,
        fruitTypes: [],
        pointValues: [5],
        reverseType: FruitType.BLUEBERRY,
      },
    ]} fruitCards={[
    {type: FruitType.STRAWBERRY},
    {type: FruitType.MANGO},
    {type: FruitType.BANANA},
    {type: FruitType.PEAR},
    {type: FruitType.BLUEBERRY},
    {type: FruitType.GRAPE},
      ]}/> */}
  </>
}