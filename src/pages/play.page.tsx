import React, { FC, useEffect, useReducer } from 'react';
import { GameProgress } from '../model/state/game-progress.model';
import { PointCardType } from '../model/card/point-card-type.model';
import { FruitType } from '../model/fruit.model';
import { FruitMarketComponent } from '../component/market/fruit-market.component';
import { PlayContext, PlayDispatchContext } from '../state/play/play.context';
import { playReducer } from '../state/play/play.reducer';
import { initialPlayState } from '../state/play/play.state';
import { PlayActionType } from '../state/play/play.actions';
import { Player } from '../model/player/player.model';
import { PlayerState } from '../component/player/player-state.component';

export const PlayPage: FC = () => {
  const [playState, dispatch] = useReducer(playReducer, initialPlayState);

  useEffect(() => {
    // Load data from the backend upon receiving state
    dispatch({
      type: PlayActionType.UpdateGameState,
      gameState: {
        // example data for now
        roomId: 'test_room',
        players: [
          {
            name: 'Christian',
            pointCards: [
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
            ],
            fruitCards: [
              { type: FruitType.BANANA },
              { type: FruitType.PEAR },
              { type: FruitType.PEAR },
              { type: FruitType.BLUEBERRY },
            ],
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
            fruitTypes: [
              FruitType.STRAWBERRY,
              FruitType.MANGO,
              FruitType.BANANA,
              FruitType.PEAR,
              FruitType.BLUEBERRY,
              FruitType.GRAPE,
            ],
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
          { type: FruitType.STRAWBERRY },
          { type: FruitType.MANGO },
          { type: FruitType.BANANA },
          { type: FruitType.PEAR },
          { type: FruitType.BLUEBERRY },
          { type: FruitType.GRAPE },
        ],
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
