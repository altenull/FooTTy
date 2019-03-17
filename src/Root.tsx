import * as React from 'react';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './store';
import { runSagas } from './store/configureStore';

class Root extends React.Component {
  componentDidMount() {
    runSagas();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
