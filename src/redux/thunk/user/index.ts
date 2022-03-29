import { Dispatch } from 'redux';

import { USERS } from 'services/api';

export const someThunk =
  () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await USERS.getSome();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { statusCode, id } = response.data;
      // eslint-disable-next-line no-empty
    } catch (e) {
      //
    }
  };
