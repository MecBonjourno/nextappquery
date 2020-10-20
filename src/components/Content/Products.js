import React from 'react';

import { ProductsWrapper } from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Produtos Físicos</h3>
          <p>Produtos da QueRy Club</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Tecnologia</h3>
          <p>A maravilha tecnológica envolvendo a QueRy</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Planos</h3>
          <p>Os benefícios que a QueRy traz com planos de assinatura</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Data</h3>
        <p>Análises de dados do seu ID</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Atlas</h3>
        <p>Conexões geradas com seu ID</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Radar</h3>
        <p>Uso do seu ID com o seus arredores</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Customização</h3>
        <p>Criação de cartões virtuais e físicos customizados por vc!</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Business</h3>
        <p>Soluções customizadas para empresas</p>
      </li>
    </ul>
  </ProductsWrapper>
);