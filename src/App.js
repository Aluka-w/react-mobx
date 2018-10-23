import React, { Component } from "react";
import { observer } from 'mobx-react';

@observer class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        test
      </div>
    )
  }
}
export default App