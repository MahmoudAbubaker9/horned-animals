/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';




class Main extends React.Component {

  render() {
      return (
        <div>
        {this.Data.map(picRender => {
          if (this.NumberOfH === 0) {
            return( <HornedBeast
              title={picRender.title}
              description={picRender.description}
              image_url={picRender.image_url}
              keyword={picRender.keyword}
              horns={picRender.horns}
              stateUpdate={this.props.stateUpdate}
              CardData={this.props.CardData}
            />
            )
          } if (this.NumberOfH === picRender.horns) {
            return( <HornedBeast
              title={picRender.title}
              description={picRender.description}
              image_url={picRender.image_url}
              keyword={picRender.keyword}
              horns={picRender.horns}
              stateUpdate={this.props.stateUpdate}
              CardData={this.props.CardData}
            />
            )
          }
        }
        )};
        
        </div>

        
      )};

  }

export default Main;