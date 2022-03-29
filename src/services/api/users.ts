import { instance } from 'services/api/config';

export const userApi = {
  getSome() {
    return instance.get<any>('');
  },
};
