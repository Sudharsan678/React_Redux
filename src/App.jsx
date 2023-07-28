import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
