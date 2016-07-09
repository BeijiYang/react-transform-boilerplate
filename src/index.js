import React from 'react';
import { render } from 'react-dom'; //用于DOM挂载
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';
import './style/main.scss';

render(<App />, document.getElementById('root'));

