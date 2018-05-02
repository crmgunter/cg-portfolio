import React, { Component } from "react";
import styled from "styled-components";

const ContentBorder = styled.div`
  width: 95vw;
  min-height: 100vh;
  margin: auto;
  margin-top: 20px;
  color: #00383b;
`;

const FlexContainer = styled.div`
display: flex;
width: 95vw;
height: 100vh; 
`

const FlexContent = styled.div`
background: #00383B;
height: 40%;
width: 100%;
`

const Test = styled.div`
  font-family: "Seaweed Script", cursive;
`;

class Content extends Component {
  render() {
    return (
      <div>
        <ContentBorder>
          <div>
            <Test>
              <h1>Hello there, and welcome</h1>
            </Test>
          </div>

          <FlexContainer>
              <FlexContent>

              </FlexContent>
          </FlexContainer>
        </ContentBorder>
      </div>
    );
  }
}

export default Content;
