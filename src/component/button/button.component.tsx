import React, { FC, MouseEventHandler } from 'react';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const Button: FC<{
  type: ButtonType;
  disabled: boolean;
  text: string;
  onClick?: MouseEventHandler;
}> = ({ type, disabled, text, onClick }) => {
  return (
    <button
      className={`button ${type} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
