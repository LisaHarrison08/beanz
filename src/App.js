import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
