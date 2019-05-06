import React, { Component, lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { LocaleProvider } from '../contexts/locale.context';

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
    user-select: none;
  }
`;

const HomePage = lazy(() => import('./pages/HomePage'));
const LeaguePage = lazy(() => import('./pages/LeaguePage'));

class App extends Component {
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
        <HashRouter>
          <Switch>
            <Route
              path={'/'}
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <LocaleProvider hl={this.getHostLanguage(window.location.search)}>
                    <Route path={'/'} component={HomePage} exact={true} />
                    <Route path={'/:league'} component={LeaguePage} exact={true} />
                  </LocaleProvider>
                </Suspense>
              )}
            />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
