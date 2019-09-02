import React, { Component } from 'react';
import Main from './components/MainComponents'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
   
   <Header/>
     <Main/>
     <Footer/>
    
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
