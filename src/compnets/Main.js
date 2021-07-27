/* eslint-disable no-unused-vars */
import React from 'react';
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

import HornedBeast from './HornedBeast';



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
