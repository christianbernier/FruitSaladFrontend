import React, { FC } from 'react';
import { PointCardComponent } from '../card/point-card.component';
import { EmptyCardComponent } from '../card/empty-card.component';
import { PointCard } from '../../model';

export const PointCardSetComponent: FC<{ cards: (PointCard | null)[] }> = ({
  cards,
}) => {
  return (
    <>
      <div className={'point-card-set-container'}>
        {cards.map((card) => {
          if (card) {
            return <PointCardComponent card={card} />;
          } else {
            return <EmptyCardComponent />;
          }
        })}
      </div>
    </>
  );
};
