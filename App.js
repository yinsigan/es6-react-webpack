import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>{txt}</div>
    )
  }
}

// const App = () => <div>Hello</div>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}

export default App
