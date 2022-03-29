import { RootReducerType } from 'redux/store';

export const selectUsers = (state: RootReducerType): number => state.user.some;
