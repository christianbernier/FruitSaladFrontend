import React, { FC } from 'react';
import { Player } from '../../model/player/player.model';
import { PlayerCardsComponent } from './player-cards.component';

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
