import React, { Component } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
height: 100vh;
width: 100vw;
background: black;
`

class Work extends Component {
    render() {
        return (
            <div>
                <ContentContainer></ContentContainer>
            </div>
        );
    }
}

export default Work;