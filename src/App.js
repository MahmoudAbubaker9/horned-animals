/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Data from './compnets/data.json';
import Footer from './compnets/Footer';
import Main from './compnets/Main';
import Header from './compnets/Header';
import SelectedBeast from './compnets/SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      description: null,
    };

    let CardData = (title, pic, descp) => {
      this.setState({
        title: title,
        url: pic,
        description: descp,
      });
    };

    let stateShow = () => {
      this.setState({
        show: true,
      });
    };

    let stateHide = () => {
      this.setState({
        show: false,
      });
    };

    render();{
      return (
        <div>
          <Header />
          <SelectedBeast
            show={stateShow}
            hide={stateHide}
            title={this.state.title}
            pic={this.state.url}
            descp={this.state.description}
          />
          <Main
            data={Data}
            stateUpdate={stateShow}
            CardData ={CardData}
          />
          <Footer />
        </div>
      );
    
    }
  }
}
  
export default App;
