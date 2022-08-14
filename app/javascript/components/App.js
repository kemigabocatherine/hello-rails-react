import React from "react"
import configureStore from "../configureStore"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Greeting from "./Greeting"
import { Provider } from "react-redux"

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" element={<h2>Home!</h2>}/>
            <Route path="/greeting" element= {<Greeting greeting="Friend" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
