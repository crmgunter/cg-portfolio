import React, { Component } from "react";
import styled from "styled-components";
import animated from "animate.css";
import Nav from './Nav'

const Body = styled.div`
  display: flex;
`;

const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f476ac19d42e54ccf4f02fea361a7d88&auto=format&fit=crop&w=800&q=60");
  margin: auto;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .fadeLeft {
    animation-duration: 2s;
  }

  .fadeRight {
      animation-duration: 4s;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  text-align: center;
`;

const LandingTextBackground = styled.div`
  height: 200px;
  display: flex;
`;

const LandingText = styled.div`
  margin: auto;
  padding: 20px 30px;
  color: #053234;

  h1 {
      font-weight: 200;
  }
`;

const BottomTextBackground = styled.div`
  height: 100px;
  display: flex;
`;

const BottomLandingText = styled.div`
  margin: auto;
  background: #fbf4e5;
  padding: 20px 30px;
  color: #053234;
  opacity: .75;
  border-radius: 5px;
`;

class Splash extends Component {
  render() {
    return (
      <Body>
        <LandingImage className="animated fadeInUpBig">
        <Nav/>
          <FlexContainer>
              
            <LandingTextBackground className="fadeLeft animated fadeInLeftBig">
              <LandingText>
                <h1>I'm Cameron</h1>
                <p>I build responsive, beautiful websites.</p>
              </LandingText>
            </LandingTextBackground>
            <BottomTextBackground className="fadeRight animated fadeInRightBig">
              <BottomLandingText>It's nice to meet you.</BottomLandingText>
            </BottomTextBackground>
          </FlexContainer>
        </LandingImage>
      </Body>
    );
  }
}

export default Splash;
