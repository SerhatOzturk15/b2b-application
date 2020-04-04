import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import List from './components/List'
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App">
      <HomeContainer/>
    </div>
  );
}

export default App;
