import React, { FC } from 'react';
import { PointCard } from '../card/point-card.component';
import { EmptyCard } from '../card/empty-card.component';
import { PointCard as PointCardModel } from '../../model';

export interface PointCardSetParams {
  cards: (PointCardModel | null)[];
}

export const PointCardSet: FC<PointCardSetParams> = ({ cards }) => {
  return (
    <>
      <div className={'point-card-set-container'}>
        {cards.map((card) => {
          if (card) {
            return <PointCard card={card} />;
          } else {
            return <EmptyCard />;
          }
        })}
      </div>
    </>
  );
};
