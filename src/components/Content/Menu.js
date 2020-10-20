import React from 'react';
import Link from 'next/link'

import { MenuWrapper } from './styles';

export const Menu = () => (
  <>
  <MenuWrapper style={{marginRight: 300}}>
    <ul className="primary" >
      <li>
        <span />
        <Link href="/users/register">Cadastro</Link>  
      </li>
      <li>
        <span />
        <Link href="/users/login">Login</Link> 
      </li>
      <li>
        <span />
        IDiscover
      </li>
    </ul>
  </MenuWrapper>
  </>
);