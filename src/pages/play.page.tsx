import React, { FC, useMemo, useReducer, useState } from 'react';
import { FruitMarket } from '../component/market/fruit-market.component';
import { PlayContext, PlayDispatchContext } from '../state/play/play.context';
import { playReducer } from '../state/play/play.reducer';
import { initialPlayState } from '../state/play/play.state';
import { PlayActionType } from '../state/play/play.actions';
import { PlayerState } from '../component/player/player-state.component';
import { GameProgress, GameState, Player } from '../model';
import { RoomService } from '../services/room/room.service';

export const PlayPage: FC = () => {
  const [playerName, setPlayerName] = useState('');
  const [playState, dispatch] = useReducer(playReducer, initialPlayState);
  const roomService = useMemo(() => new RoomService(), []);

  const joinRoom = () => {
    if (!playState.roomUid) return;
    if (!playerName) return;

    roomService.joinRoom(
      playState.roomUid,
      playerName,
      onStateUpdate,
      onServerError,
      onStateUpdate
    );
  };

  const onStateUpdate = (gameState: GameState): void => {
    dispatch({
      type: PlayActionType.UpdateGameState,
      gameState,
    });
  };

  const onServerError = (error: Error): void => {
    dispatch({
      type: PlayActionType.UpdateServerError,
      serverError: error.message,
    });
  };

  return (
    <>
      {playState.gameProgress === GameProgress.IN_PROGRESS && (
        <PlayContext.Provider value={playState}>
          <PlayDispatchContext.Provider value={dispatch}>
            <div className={'play-page'}>
              <div className={'play-page-left'}>
                <span className={'play-page-fruit-market-title'}>
                  Fruit Market
                </span>
                <FruitMarket />
              </div>
              <div className={'play-page-right'}>
                {playState.players.map((player: Player) => (
                  <PlayerState player={player} />
                ))}
              </div>
            </div>
          </PlayDispatchContext.Provider>
        </PlayContext.Provider>
      )}
    </>
  );
};
