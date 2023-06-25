import { Dispatch, createContext } from 'react';
import { PlayState, initialPlayState } from './play.state';
import { PlayAction } from './play.actions';

export const PlayContext = createContext<PlayState>(initialPlayState);
export const PlayDispatchContext = createContext<Dispatch<PlayAction>>(
  () => undefined
);
