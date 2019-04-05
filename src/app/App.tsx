import * as React from 'react';
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
  }
`;

const HomePage = React.lazy(() => import('./pages/HomePage'));

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
        <HashRouter>
          <Switch>
            <Route
              path={'/'}
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <LocaleProvider hl={this.getHostLanguage(location.search)}>
                    <Route path={'/'} component={HomePage} exact={true} />
                  </LocaleProvider>
                </React.Suspense>
              )}
            />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
