import React, { FC } from 'react';
import { PlayerCardsComponent } from './player-cards.component';
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
      <PlayerCardsComponent
        pointCards={player.pointCards || []}
        fruitCards={player.fruitCards || []}
      />
    </>
  );
};
