import React, { FC } from 'react';

import '../../styles/card.css';

export const EmptyCardComponent: FC = () => {
  return (
    <div className={'card-wrapper'}>
      <div className={`card`} />
    </div>
  );
};
