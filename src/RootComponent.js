import React from 'react'
// import { Route } from 'react-router';
import { Switch, Route } from "react-router-dom";
import Annotator from './components/Annotator';
import ImportCsvFile from './components/ImportCsvFile'

const RootComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <ImportCsvFile />
        </Route>
        <Route exacat path='/annotation'>
          <Annotator />
        </Route>
      </Switch>
    </div>
  )
}

export default RootComponent;

