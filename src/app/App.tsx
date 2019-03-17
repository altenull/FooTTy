import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { LocaleProvider } from '../contexts/locale.context';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

class App extends React.Component {
  hl: string | null = null;

  getHostLanguage = (locationSearch: string): string | null => {
    const searchParams = new URLSearchParams(locationSearch);
    this.hl = this.hl || searchParams.get('hl');

    return this.hl;
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <GlobalStyle />
        <LocaleProvider hl={this.getHostLanguage(location.search)}>
          <HomePage />
        </LocaleProvider>
      </>
    );
  }
}

export default App;
