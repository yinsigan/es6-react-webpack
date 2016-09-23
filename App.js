import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'this is the state txt' }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
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
