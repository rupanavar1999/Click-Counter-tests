import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increment = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="button" onClick={this.increment}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
