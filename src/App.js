import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Splash from "./components/Splash";
import Content from "./components/Content";
import Work from './components/Work'



const Body = styled.div`
  background: #FBF4E5;
  width: 100vw;
  margin: auto;
  font-family: verdana;
`;

class App extends Component {
  render() {
    return (
      <Body>
        <Splash />
        <Content />
      </Body>
    );
  }
}

export default App;
