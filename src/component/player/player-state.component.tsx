import React, { FC } from 'react';
import { PlayerCards } from './player-cards.component';
import { Player } from '../../model';

export interface PlayerStateParams {
  player: Player;
}

export const PlayerState: FC<PlayerStateParams> = ({ player }) => {
  return (
    <>
      <div>
        <span>{player.name}</span>
      </div>
      <PlayerCards
        pointCards={player.pointCards || []}
        fruitCards={player.fruitCards || []}
      />
    </>
  );
};
