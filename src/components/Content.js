import React, { Component } from "react";
import styled from "styled-components";
import Work from './Work'
import animated from 'animate.css'

const ContentContainer = styled.div`
  width: 100vw;
  background: #FCF5E3;
  margin: 0;
`;

const HelloDiv = styled.div`
  height: 20vh;
  width: 100vw;
  background: #FCF5E3;
  color: #505775;
  display: flex;
  margin-top: 40px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
      margin: 0;
  }
`;


const HelloText = styled.div`
  margin: auto;
  width: 800px;
  text-align: center;
  

  h3 {
    font-weight: 200;
    font-family: verdana;
  }

  @media only screen and (max-width: 600px) {
      width: 400px;
  }
`;

const AboutMeContainer = styled.div`
  height: 70vh;
  width: 100vw;
  background: #f9f9fb;
  display: flex;
  margin: auto;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
      height: 100vh;
    flex-direction: column;
  }
`;


const AboutMeImage = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 350px;
  background-image: url("https://images.vexels.com/media/users/3/143561/isolated/preview/afa3aa927b63061e3b0222b7dab9cdbf-vintage-nautical-north-arrow-ubication-by-vexels.png");
  background-size: cover;

  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
    margin: 0 auto;
  }
`;

const AboutMeContent = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  max-width: 400px;
  text-align: center;
  color: #505775;
  h1 {
    font-weight: 200;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media only screen and (max-width: 600px) {
      margin: 20px auto;
  }
`;

class Content extends Component {
  render() {
    return (
      <div>
        <ContentContainer>
          <HelloDiv>
            <HelloText>
              <h3>
                Hello! My name is Cameron and I'm a front end developer. I'm
                passionate about functional and responsive design. I currently
                live in Atlanta and I'm looking for work!
              </h3>
            </HelloText>
          </HelloDiv>
          <AboutMeContainer>
            {/* <AboutMeImage />
            <AboutMeText /> */}
            <AboutMeContent className="animated fadeInLeftBig">
              <h1>Hi, I'm Cameron.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                incidunt optio amet autem, sapiente eveniet impedit quas
                cupiditate ea delectus quam veritatis commodi magnam dolorum
                quibusdam officiis consequatur, blanditiis placeat!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis aliquid accusantium ad eveniet veniam sapiente neque. Laborum omnis inventore provident fuga neque, eum perferendis, aspernatur vero, amet veritatis ab.
              </p>
            </AboutMeContent>
            <AboutMeImage></AboutMeImage>
          </AboutMeContainer>
        </ContentContainer>
        <Work/>
      </div>
    );
  }
}

export default Content;
