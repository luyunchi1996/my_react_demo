import React,{Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header,Footer,Content,LeftContent,Screen} from './components/skeleton'


function App() {
  return (
    <Fragment>
      <Screen>
         <Header/>
         <Content backgroundColor="#c0cfea"/>
      </Screen>
 
    </Fragment>
  );
}

export default App;
