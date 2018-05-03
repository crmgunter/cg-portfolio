import React, { Component } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
width: 100vw;
background: #F9F9FB;
margin: 0;
`

const HelloDiv = styled.div`
height: 30vh;
width: 100vw;
background: #fbf4e5;
color: #00383B;
display: flex;
justify-content: center;
`

const HelloText = styled.div`
margin: auto;
width: 90vw;
height: 20vh;
text-align: center;
color: #00383B;

h3 {
    font-weight: 200;
    font-family: verdana;
}
`

const AboutMeContainer = styled.div`
height: 80vh;
width: 100vw;
background: #f1ddc9;
display: flex;
`

const AboutMeText = styled.div`
height: 100%;
width: 50%;
background: #f1ddc9;
`

const AboutMeImage = styled.div`
height: 100%;
width: 50%;
background-image: url('https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/382209_10151772777213636_1587384945_n.jpg?_nc_cat=0&oh=6e053261a9070febd35a25eb9956b921&oe=5B5CDD7F');
background-size: cover;
`

class Content extends Component {
  render() {
    return (
      <div>
        <ContentContainer>
            <HelloDiv>
                <HelloText>
                    <h3>Hello! My name is Cameron and I'm a front end developer. I'm passionate about functional and responsive design. I currently live in Atlanta and I'm looking for work!</h3>
                </HelloText>
            </HelloDiv>
            <AboutMeContainer>
                <AboutMeText></AboutMeText>
                <AboutMeImage></AboutMeImage>
            </AboutMeContainer>
        </ContentContainer>
      </div>
    );
  }
}

export default Content;
