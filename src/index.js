import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'hoc/App/App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';

export const AppWrapper = () => {
  return (
    <App>
      <Home />
    </App>
  );
};
const APP_NAME = process.env.REACT_APP_NAME;
const render = `render${APP_NAME}`;
const unmount = `unmount${APP_NAME}`;

// render MF
window[render] = containerId => {
  ReactDOM.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount MF
window[unmount] = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

/* istanbul ignore next */
// if not a MF
if (!document.getElementById(`${APP_NAME}-container`)) {
  window[render]('root');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
