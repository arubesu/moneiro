import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.get("http://localhost:3000/api/transactions", () => ({
      transactions: [{
        id: 1,
        title: 'Website development',
        category: 'Development',
        value: 15000.00,
        date: new Date(),
        type: 'credit',
      },
      {
        id: 2,
        title: 'Chair',
        category: 'office',
        value: 500.00,
        date: new Date(),
        type: 'debit',
      },
      {
        id: 3,
        title: 'Website development',
        category: 'Development',
        value: 15000.00,
        date: new Date(),
        type: 'credit',
      },
      ],
    }));
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);