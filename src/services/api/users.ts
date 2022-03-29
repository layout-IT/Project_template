import { instance } from 'services/api/config';

export const USERS = {
  getSome() {
    return instance.get<any>('');
  },
};
