import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import Header from './Header';

const generateClassName = createGenerateClassName({
  disableGlobal: true,
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />;
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
