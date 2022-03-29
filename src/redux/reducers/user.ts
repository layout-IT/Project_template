import User from 'services/reducer/user';

export type InitialStateType = typeof initialState;

export const initialState = {
  some: 3,
  users: [],
};

export type ActionType = {} | ReturnType<typeof SomeAC>;

export const userReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case 'TYPE':
      return User.updateActive(state, action);

    default:
      return state;
  }
};

export const SomeAC = (users: []): any => ({
  type: 'TYPE',
  users,
});
