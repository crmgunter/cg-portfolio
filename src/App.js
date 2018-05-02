import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Splash from './components/Splash'
import Content from './components/Content'

const Body = styled.div`
  background: #E2DC9B;
`

class App extends Component {
  render() {
    return (
      <Body>
        <Splash/>
        <Content/>
      </Body>
    );
  }
}

export default App;
