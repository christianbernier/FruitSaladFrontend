import React, { FC } from 'react';

import '../../styles/card.css';

export const EmptyCard: FC = () => {
  return (
    <div className={'card-wrapper'}>
      <div className={`card`} />
    </div>
  );
};
