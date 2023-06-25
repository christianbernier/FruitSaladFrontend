import React, { FC, useEffect, useMemo, useReducer, useState } from 'react';
import { FruitMarket } from '../component/market/fruit-market.component';
import { PlayContext, PlayDispatchContext } from '../state/play/play.context';
import { playReducer } from '../state/play/play.reducer';
import { initialPlayState } from '../state/play/play.state';
import { PlayActionType } from '../state/play/play.actions';
import { PlayerState } from '../component/player/player-state.component';
import { GameProgress, GameState, Player } from '../model';
import { RoomService } from '../services/room/room.service';
import { Button, ButtonType } from '../component/button/button.component';
import { useParams } from 'react-router-dom';

export const PlayPage: FC = () => {
  const { roomUid } = useParams();
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

  useEffect(() => {
    if (!roomUid) {
      window.location.href = '/';
      return;
    }

    dispatch({
      type: PlayActionType.SetRoomUid,
      roomUid,
    });
  }, []);

  return (
    <>
      {playState.gameProgress === GameProgress.JOINING && (
        <div className='play-page--pre-join'>
          <p>Please enter your name</p>
          <input
            type='text'
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
          <Button type={ButtonType.PRIMARY} text='Join' onClick={joinRoom} />
        </div>
      )}
      {playState.gameProgress === GameProgress.WAITING_TO_START && (
        <div className='play-page--waiting-to-start'>
          <p>Waiting to start...</p>
          <p>Current players:</p>
          {playState.players.map((player: Player) => (
            <p>{player.name}</p>
          ))}
          <Button
            type={ButtonType.PRIMARY}
            text='Start'
            onClick={roomService.startGame}
          />
        </div>
      )}
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
