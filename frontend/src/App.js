import './App.css';
import LoadingScreen from './containers/LoadingScreen';
import ListScreen from './containers/ListScreen';
import {BrowserRouter, Route} from 'react-router-dom'
import DetailScreen from './containers/DetailScreen';
import Offline from './containers/offline';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';

function App() {

  window.addEventListener("offline", () => {
    window.location.href = 'offline';
  })
  window.addEventListener("online", () => {
    window.history.back()
  })

  return (
    <div className="App">

      <BrowserRouter>
      
        <Navbar />
        <Route path="/questions/:id" component={DetailScreen} />
        <Route exact path="/questions" component={ListScreen} />
        
        <Route exact path="/offline" component={Offline}/>
        <Route exact path="/" component={LoadingScreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
