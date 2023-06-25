import React, { FC, useEffect, useReducer } from 'react';
import { FruitMarketComponent } from '../component/market/fruit-market.component';
import { PlayContext, PlayDispatchContext } from '../state/play/play.context';
import { playReducer } from '../state/play/play.reducer';
import { initialPlayState } from '../state/play/play.state';
import { PlayActionType } from '../state/play/play.actions';
import { PlayerState } from '../component/player/player-state.component';
import {
  FruitCard,
  FruitType,
  GameProgress,
  Player,
  PointCard,
  PointCardType,
} from '../model';

export const PlayPage: FC = () => {
  const [playState, dispatch] = useReducer(playReducer, initialPlayState);

  useEffect(() => {
    // Load data from the backend upon receiving state
    dispatch({
      type: PlayActionType.UpdateGameState,
      gameState: {
        // example data for now
        roomUid: 'test_room',
        players: [
          {
            uid: 'player-christian',
            name: 'Christian',
            pointCards: [
              {
                pointType: PointCardType.AT_LEAST_2,
                fruitTypes: [],
                pointValues: [3],
                reverseFruit: FruitType.STRAWBERRY,
              },
              {
                pointType: PointCardType.FEWEST_OF_TYPE,
                fruitTypes: [FruitType.BANANA],
                pointValues: [7],
                reverseFruit: FruitType.GRAPE,
              },
            ],
            fruitCards: [
              { fruit: FruitType.BANANA },
              { fruit: FruitType.PEAR },
              { fruit: FruitType.PEAR },
              { fruit: FruitType.BLUEBERRY },
            ],
          } as Player,
          {
            uid: 'player-jeremy',
            name: 'Jeremy',
          },
          {
            uid: 'player-ben',
            name: 'Ben',
          },
        ],
        gameProgress: GameProgress.IN_PROGRESS,
        pointCards: [
          {
            pointType: PointCardType.DIFF_SET,
            fruitTypes: [FruitType.BANANA, FruitType.MANGO, FruitType.PEAR],
            pointValues: [8],
            reverseFruit: FruitType.BANANA,
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
          {
            pointType: PointCardType.AT_LEAST_3,
            fruitTypes: [],
            pointValues: [5],
            reverseFruit: FruitType.BLUEBERRY,
          },
        ] as PointCard[],
        fruitCards: [
          { fruit: FruitType.STRAWBERRY },
          { fruit: FruitType.MANGO },
          { fruit: FruitType.BANANA },
          { fruit: FruitType.PEAR },
          { fruit: FruitType.BLUEBERRY },
          { fruit: FruitType.GRAPE },
        ] as FruitCard[],
      },
    });
  }, []);

  return (
    <>
      <PlayContext.Provider value={playState}>
        <PlayDispatchContext.Provider value={dispatch}>
          <div className={'play-page'}>
            <div className={'play-page-left'}>
              <span className={'play-page-fruit-market-title'}>
                Fruit Market
              </span>
              <FruitMarketComponent />
            </div>
            <div className={'play-page-right'}>
              {playState.players.map((player: Player) => (
                <PlayerState player={player} />
              ))}
            </div>
          </div>
        </PlayDispatchContext.Provider>
      </PlayContext.Provider>
    </>
  );
};
