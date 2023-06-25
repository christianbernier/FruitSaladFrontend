import React, { FC } from 'react';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonParams {
  type: ButtonType;
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonParams> = ({
  type,
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`button ${type} ${disabled ? 'disabled' : ''}`}
      onClick={() => onClick()}
    >
      <span>{text}</span>
    </button>
  );
};
