import React from 'react';
import { Container, LeftSide, RightSide } from './styles';

import logo from '../../assets/logo.svg';
import bell from '../../assets/bell.svg';

function Header() {
  return (
    <Container>
      <LeftSide>
        <img src={logo} alt='Logo' />
      </LeftSide>

      <RightSide>
        <a href='#'>INÍCIO</a>
        <span className='divider' />

        <a href='#'>NOVA TAREFA</a>
        <span className='divider' />

        <a href='#'>SINCRONIZAR CELULAR</a>
        <span className='divider' />

        <a href='#' id='notification'>
          <img src={bell} alt='Notificação' />
          <span>5</span>
        </a>
      </RightSide>
    </Container>
  );
}

export default Header;
