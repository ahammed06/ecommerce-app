'use client';  // Marks this as a client-side component

import { Provider } from 'react-redux';
import store from '../redux/store';  // Import your store
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shop the best products at amazing prices." />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <Header />
        <Provider store={store}>
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
