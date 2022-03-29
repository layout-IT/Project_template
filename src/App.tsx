import { FC } from 'react';

import { useSelector } from 'react-redux';

import { useCustomHook } from 'hooks';
import { selectUsers } from 'redux/selecrors';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  const user = useSelector(selectUsers);
  const id = 1;
  const [isChecked, handleSomeFunction] = useCustomHook(id);

  // const array = ['1', '2', '2', '3'];
  // const indexOfArray = 0;
  // const r = array[indexOfArray];   магическое число

  return (
    <div>
      <div>{user}</div>
      {!isChecked ? handleSomeFunction : 'isChecked: true'}
    </div>
  );
};
