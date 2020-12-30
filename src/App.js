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

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/test">
            <h1>Test</h1>
          </Route>
          <Route path="/chicago-style-book">
            <CMOSBook />
          </Route>
          <Route path="/chicago-style-journal">
            <CMOSJournal />
          </Route>
          <Route path="/chicago-style-website">
            <CMOSWebsite />
          </Route>
          <Route path="/chicago-style-lecture">
            <CMOSLecture />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
