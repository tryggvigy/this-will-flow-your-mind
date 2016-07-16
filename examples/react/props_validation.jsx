// @flow

import React from 'react'

class CoffeeImage extends React.Component {
  props: {
    format: 'png' | 'jpg',
  };

  render() {
    const {format} = this.props;
    return (
      <img src={`https://assets.imgix.net/unsplash/coffee.JPG?w=900&usm=10&fm=${format}&q=95`}/>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Getting a craving for a cup of ☕️ yet?</h1>
        {/* $FlowSuppressError: got `gif` required `png` og `jpg` */}
        <CoffeeImage format="gif"/>
      </div>
    )
  }
}
