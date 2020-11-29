import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputPage from './pages/InputPage';
import OutputPage from './pages/OutputPage';
import { AppContextProvider } from './context';

const App = () => {
  return (
    <AppContextProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <Switch>
            <Route path="/input">
              <InputPage />
            </Route>
            <Route path="/output">
              <OutputPage />
            </Route>
            <Route path="/">
              <InputPage />
            </Route>
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </AppContextProvider>
  );
};

export default App;
