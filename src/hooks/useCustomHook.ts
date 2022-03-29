import { useState } from 'react';

import { UseCustomHookType } from 'hooks/types';

export const useCustomHook = (id: number): UseCustomHookType[] => {
  // const dispatch = useDispatch;
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [is, setIs] = useState<number>(id);
  const handleSomeFunction = (): void => {
    setIsChecked(!isChecked);
    setIs(is);
    // dispatch(id, isChecked);
  };
  return [isChecked, handleSomeFunction];
};
