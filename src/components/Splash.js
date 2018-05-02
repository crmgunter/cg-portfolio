import React, { Component } from "react";
import styled from "styled-components";
import animated from "animate.css";

const Body = styled.div`
  display: flex;
`;

const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d156f806a757123e569cbc0206d43fe&auto=format&fit=crop&w=800&q=60");
  margin: auto;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;

  .fadeLeft {
    animation-duration: 2s;
  }
`;

const LandingTextBackground = styled.div`
  margin: auto;
  background: #BAB581;
  display: flex;
  border-radius: 5px;
`;

const LandingText = styled.div`
  margin: auto;
  padding: 20px 30px;
  color: #053234;
`;

class Splash extends Component {
  render() {
    return (
      <Body>
        <LandingImage className="animated fadeInUpBig">
          <LandingTextBackground className="fadeLeft animated fadeInLeftBig">
            <LandingText>
              <h1>I'm Cameron</h1>
            </LandingText>
          </LandingTextBackground>
        </LandingImage>
      </Body>
    );
  }
}

export default Splash;
