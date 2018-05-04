import React, { Component } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fcf5e3;
  display: flex;
`;

const ProjectContainer = styled.div`
  border: 1px solid red;
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
      width: 300px;
      margin: auto;
  }
`;

class Work extends Component {
  render() {
    return (
      <div>
        <ContentContainer>
          <ProjectContainer>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate impedit ad et blanditiis dolorem consequuntur illo maxime voluptatem obcaecati.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quo consequatur, debitis tenetur maxime esse nesciunt nostrum illo voluptatum. Optio.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus saepe cum quis perferendis placeat expedita officia dicta est libero soluta?</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nihil sapiente. Exercitationem quos laboriosam vero debitis! Quam placeat enim velit.</div>
          </ProjectContainer>
        </ContentContainer>
      </div>
    );
  }
}

export default Work;
