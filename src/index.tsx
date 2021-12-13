import React from 'react';
import ReactDOM from 'react-dom';
import { Conversor } from './page/Conversor';

import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Conversor />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
