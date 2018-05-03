import React, { Component } from 'react';
import styled from 'styled-components'
import animated from 'animate.css'

const NavBar = styled.div`
width: 100vw;
height: 1vh;
`

const NavLinks = styled.ul`
list-style: none;
display: flex;


li {
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
}

li:hover {
    background: #053234;
    color: #fbf4e5;
}
`

class Nav extends Component {
    render() {
        return (
            <NavBar>
                <NavLinks>
                    <li>Home</li>
                    <li onClick={this.props.scrollDown}>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </NavLinks>
            </NavBar>
        );
    }
}

export default Nav;