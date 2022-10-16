import React, { Component} from 'react';
import CarouselContainer from './CarouselContainer';
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
                <CarouselContainer></CarouselContainer>
            </div>
        );
    }
}
  
export default App;
