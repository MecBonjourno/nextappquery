import React from 'react';
import Link from 'next/link'

import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';

import { Products ,Developers, Company, Menu } from '../Content'

import { Container, DropdownStyles, Logo, Nav } from './styles';

const NavBar: React.FC = () => {
  return (
    <DropdownProvider>
     <DropdownStyles>
     <Container>


					<div id="logo">
					  <a href="query-beta.vercel.app"><img src="https://querymobile.co/IMGS/img/logoBeta3.png" alt="" title="" style={{maxHeight: 50, maxWidth: 50, flex: 1, flexDirection: 'row', position: 'absolute', marginLeft: 20, marginTop: 14, visibility: 'visible'}}/></a>
					</div>
    
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="A QueRy"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>

      <div style={{display: 'block',
        position: 'absolute',
        right: 0,
        top: 0, visibility: 'visible', }}>
          <DropdownOption
                name="Menu"
                content={Menu}
                backgroundHeight={215}
              />
          </div>
        </Container>
       <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default NavBar;
