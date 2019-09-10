import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { flatternArr } from "./utility";
import { testCategories, testItems } from "./testData";
import { AppContext } from "./withContext";

import Login from "./containers/Login";
import Home from "./containers/Home";
import Create from "./containers/Create";
import { Screen } from "./components/Screen";

// export const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: flatternArr(testItems),
      categories: flatternArr(testCategories)
    };
    this.actions = {
      deleteItem: item => {
        delete this.state.items[item.id];
        this.setState({ items: this.state.items });
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Screen>
          <AppContext.Provider
            value={{ state: this.state, actions: this.actions }}
          >
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/create" component={Create} />
              <Route path="/edit/:id" component={Create} />

              <Route path="/user/login" component={Login} />
            </Router>
          </AppContext.Provider>
        </Screen>
      </div>
    );
  }
}

export default App;
