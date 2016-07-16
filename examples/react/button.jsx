// @flow

import React from 'react'

class Button extends React.Component {
  props: {
    title: string,
    visited: boolean,
    onClick: () => void,
  };

  state: {
    display: 'static' | 'hover' | 'active';
  };

  static defaultProps = {
    visited: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      display: 'static',
    };
  }

  onMouseEnter = () => this.setState({display: 'hover'});
  onMouseLeave = () => this.setState({display: 'static'});
  onMouseDown = () => this.setState({display: 'active'});

  render() {
    let className = 'button ' + this.state.display;
    if (this.props.visited) {
      className += ' visited';
    }

    return (
      <div className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

function renderButton(container: HTMLElement, visited?: boolean) {
  const element = (
    <Button
      title="Click me!"
      visited={visited}
      onClick={() => {
        renderButton(container, true);
      }}
    />
  );
  React.render(element, container);
}
