import '../css/app.css';
import React, { Component, useEffect } from 'react';
import CarouselContainer from './CarouselContainer';
import { Provider } from 'react-redux';
import store from '../reducers/store'
class App extends Component{
    constructor() {
        super();
        this.state = {
        };
      }
      
  componentDidMount() {}

    render() {
      return (
        <div className="App">
         <Provider store={store}>
            <CarouselContainer></CarouselContainer>
         </Provider>
        </div>
      );
    }
  }
  
  export default App;
