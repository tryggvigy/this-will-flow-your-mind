// @flow

import React from 'react'

class CoffeeImage extends React.Component {
  props: {
    format: 'png' | 'jpg',
  }

  render() {
    const {format} = this.props;
    return (
      <img
        src={`https://assets.imgix.net/unsplash/coffee.JPG?w=900&usm=10&fm=${format}&q=95`}
      />
    )
  }
}

function App() {
  return (
    <div>
      <h1>Getting a craving for a cup of ☕️ yet?</h1>
      {/* $FlowSuppressError: expected png or jpg, got gif */}
      <CoffeeImage format={'gif'} />
    </div>
  )
}
