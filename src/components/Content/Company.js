import React from 'react';

import { CompanyWrapper } from './styles';

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span />
        Sobre a QueRy
      </li>
      <li>
        <span />
        Clientes
      </li>
      <li>
        <span />
        Corporativo
      </li>
      <li>
        <span />
        Parceiros
      </li>
      {/* <li>
        <span />
        Empregos
      </li> */}
      {/* <li>
        <span />
        Meio ambiente
      </li> */}
      <li>
        <span />
        Notícias
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Blog
      </li>
      <li>
        Lançamento da QueRy
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Divulgação 
        <span className="arrow">{'>'}</span>
      </li>
      {/* <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li> */}
    </ul>
  </CompanyWrapper>
);