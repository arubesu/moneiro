import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: 'Website Development',
          category: 'development',
          value: 15500.89,
          type: 'credit',
          date: new Date(),
        },
        {
          id: 2,
          category: 'bills',
          description: 'Electricity bill',
          value: 120.84,
          type: 'debt',
          date: new Date(),
        },
        {
          id: 3,
          category: 'development',
          description: 'Website Development',
          value: 18000.56,
          type: 'credit',
          date: new Date(),
        },
        {
          id: 4,
          category: 'bills',
          description: 'Apartment Rent',
          value: 2000,
          type: 'debt',
          date: new Date(),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    let newId = 5;

    this.get('/transactions', () =>
      this.schema.all('transactions'));

    this.post('/transactions', (schema, request) => {
      let transaction = JSON.parse(request.requestBody);

      transaction.id = newId++;
      transaction.date = new Date();

      this.schema.create('transactions', transaction);
      return transaction;
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);