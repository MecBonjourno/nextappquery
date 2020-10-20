import React from 'react';

import { Button } from './styles';

const ButtonLink: React.FC = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  );
};

export default ButtonLink;
