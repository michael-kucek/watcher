import React, { Component } from 'react'
import { connect } from "react-redux";
import handleInitialData from "../actions/shared"
import Show from "./Show";

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Show />
      </div>
    )
  }
}

export default connect()(App)
