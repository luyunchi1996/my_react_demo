import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { flatternArr } from "./utility";
import {testCategories,testItems} from "./testData";
import {AppContext} from "./withContext"

import Home from "./containers/Home";
import Create from "./containers/Create";
import { from } from "rxjs";
import { throwStatement } from "@babel/types";

// export const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       items:flatternArr(testItems),
       categories:flatternArr(testCategories),
    
    };
    this.actions={
      deleteItem:(item)=>{
           delete this.state.items[item.id]
           this.setState({items:this.state.items})
      }
    }
  }


  render() {
    return (
      <div className="App">
        <AppContext.Provider value={{state:this.state,actions:this.actions}}>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Create} />
          </Router>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
