import React from 'react';
import Link from 'next/link'
import {AppBar, Toolbar} from '@material-ui/core';

export const ToolBar: React.FC = () => (               
  <AppBar className="toolbar" position="static">
    <Toolbar>
      <h1>Список задач</h1>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link href="/">Список задач</Link>
        </li>
        <li className="nav-list__item">
          <Link href="/about">Информация</Link>
        </li>
      </ul>
    </Toolbar>
  </AppBar>
)