import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div>hello word</div>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
