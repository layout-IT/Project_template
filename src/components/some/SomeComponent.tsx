import { FC } from 'react';

import { ReturnComponentType } from 'types';

export const SomeComponent: FC<any> = (): ReturnComponentType => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const b = 4;
  return (
    <div>
      <div>some code</div>
    </div>
  );
};
