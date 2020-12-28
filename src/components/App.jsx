import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default App;
