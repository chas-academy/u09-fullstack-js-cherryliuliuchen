import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 使用 react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// 注册 PWA 更新
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('New content is available. Refresh the page to update.');
  },
  onOfflineReady() {
    console.log('App is ready to work offline.');
  },
});

// 使用 createRoot 启动应用（React 18）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* 保留 BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
