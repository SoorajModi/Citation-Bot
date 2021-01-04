import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ChicagoBook from './components/chicagoComponents/ChicagoBook';
import ChicagoJournal from './components/chicagoComponents/ChicagoJournal';
import ChicagoWebsite from './components/chicagoComponents/ChicagoWebsite';
import ChicagoLecture from './components/chicagoComponents/ChicagoLecture';
import NotFound from './components/404';
import Resources from './components/Resources';
import Contact from './components/Contact';
import About from './components/About';
import Meta from './components/Meta';

export default function App() {
  return (
    <>
      <Meta />
      <Header />
      <Router>
        <Switch>
          <Route path="/chicago-book" component={ChicagoBook} />
          <Route path="/chicago-journal" component={ChicagoJournal} />
          <Route path="/chicago-website" component={ChicagoWebsite} />
          <Route path="/chicago-lecture" component={ChicagoLecture} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </>
  );
}
