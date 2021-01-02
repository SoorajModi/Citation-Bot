import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CMOSBook from './components/CMOSBook';
import CMOSJournal from './components/CMOSJournal';
import CMOSWebsite from './components/CMOSWebsite';
import CMOSLecture from './components/CMOSLecture';
import NotFound from './components/404';
import Resources from './components/Resources';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/chicago-style-book" component={CMOSBook} />
          <Route path="/chicago-style-journal" component={CMOSJournal} />
          <Route path="/chicago-style-website" component={CMOSWebsite} />
          <Route path="/chicago-style-lecture" component={CMOSLecture} />
          <Route path="/resources" component={Resources} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
