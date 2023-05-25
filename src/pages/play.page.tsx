import React, {FC, useState} from 'react'
import {GameState} from "../model/state/state.model";
import {GameProgress} from "../model/state/game-progress.model";
import {PointCardType} from "../model/card/point-card-type.model";
import {FruitType} from "../model/fruit.model";
import {FruitMarketComponent} from "../component/market/fruit-market.component";
import {PlayerCardsComponent} from "../component/player/player-cards.component";

export const PlayPage: FC = () => {
  const [state, setState] = useState<GameState>({
    roomId: 'test_room',
    players: [
      {
        name: 'Christian',
      },
      {
        name: 'Jeremy',
      },
      {
        name: 'Ben',
      },
    ],
    gameProgress: GameProgress.IN_PROGRESS,
    pointCards: [
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
    ],
    fruitCards: [
      {type: FruitType.STRAWBERRY},
      {type: FruitType.MANGO},
      {type: FruitType.BANANA},
      {type: FruitType.PEAR},
      {type: FruitType.BLUEBERRY},
      {type: FruitType.GRAPE},
    ],
  })

  return <>
    <div className={'play-page'}>
      <div className={'play-page-left'}>
        <span className={'play-page-fruit-market-title'}>Fruit Market</span>
        <FruitMarketComponent pointCards={state.pointCards!} fruitCards={state.fruitCards!}/>
      </div>
      <div className={'play-page-right'}>
        <PlayerCardsComponent pointCards={[
          {
            pointType: PointCardType.AT_LEAST_2,
            fruitTypes: [],
            pointValues: [3],
            reverseType: FruitType.STRAWBERRY,
          },
          {
            pointType: PointCardType.FEWEST_OF_TYPE,
            fruitTypes: [FruitType.BANANA],
            pointValues: [7],
            reverseType: FruitType.GRAPE,
          },
        ]} fruitCards={[
          {type: FruitType.BANANA},
          {type: FruitType.PEAR},
          {type: FruitType.PEAR},
          {type: FruitType.BLUEBERRY},
        ]}/>
      </div>
    </div>
  </>
}