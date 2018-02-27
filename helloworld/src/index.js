import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pet from './Pet';
// the default as specified in App.js
// if want to rename the "default export" - start in App.js
// "export { App };"
// then "import { App } from './App';"
// can then rename by doing "{ App as [NEW NAME]}""
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pet />, document.getElementById('root'));
registerServiceWorker();
