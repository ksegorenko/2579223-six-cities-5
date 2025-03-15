import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      cardsCount = {Setting.CardsCount}
    />
  </React.StrictMode>
);
