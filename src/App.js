import React from 'react';

import Footer from './compnets/Footer';
import Main from './compnets/Main';
import Header from './compnets/Header';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App;