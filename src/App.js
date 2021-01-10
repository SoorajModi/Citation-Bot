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
import About from './components/About';
import ChicagoNewspaper from './components/chicagoComponents/ChicagoNewspaper';
import ChicagoFilm from './components/chicagoComponents/ChicagoFilm';

export default function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/chicago-book" component={ChicagoBook} />
            <Route exact path="/chicago-journal" component={ChicagoJournal} />
            <Route exact path="/chicago-website" component={ChicagoWebsite} />
            <Route exact path="/chicago-lecture" component={ChicagoLecture} />
            <Route exact path="/chicago-newspaper" component={ChicagoNewspaper} />
            <Route exact path="/chicago-film" component={ChicagoFilm} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
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
