/* eslint-disable no-unused-vars */
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';




class Main extends React.Component {

  render() {
    const dataPic = Data.map(picRender => {
      return (
        <div>
          <HornedBeast 
            title = {picRender.title}
            description = {picRender.description}
            image_url = {picRender.image_url}
            keyword = {picRender.keyword}
            horns = {picRender.horns}
            showCard={this.props.stateUpdate}
            CardData={this.props.CardData}
          />

        </div>

      );
    });

    return (
      <div>
        {dataPic}
      </div>);
  }
}

export default Main;
