import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // 当有新的内容可用时，这里可以提示用户刷新页面
    console.log('New content is available. Refresh the page to update.');
  },
  onOfflineReady() {
    // 当应用程序可以离线使用时，这里可以给用户提示
    console.log('App is ready to work offline.');
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
