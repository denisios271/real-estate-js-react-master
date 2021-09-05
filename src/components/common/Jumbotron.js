import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import house from '../images/house.jpg'

import styled from 'styled-components';

const Styles = styled.div `
.jumbo{
    background: url(${house}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef ;
    height: 400px;
    position:relative;
    z-index: -2;
}
.overlay {W
    background-color: #000;
    opacity:0.5;
    position:absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

`
export const Jumbotron = () => (

    
    <Styles>
    <Jumbo fluid className = "jumbo" style = {{marginBottom:'40px', marginTop:'40px'}}>
        <div className="overlay" ></div>
        <Container  style = {{paddingTop:'40px'}}>
            <h1 >Web Developer Blog</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque quis gravida neque. Pellentesque iaculis lacus sed nibh rhoncus eleifend.
                Integer cursus, elit sed maximus tempor, tortor tortor euismod quam, id commodo ipsum felis at dolor.
                Phasellus aliquet purus metus, quis sodales sapien tempor non.
                Nam dolor nisl, posuere nec fermentum in, elementum ut ante.
                Praesent nec orci at erat tincidunt rutrum in ut ante. Donec vel porta metus, tempor blandit est.
                Vivamus dolor velit, dapibus ac ultricies lacinia, lobortis vitae ligula.
                Fusce commodo lectus iaculis, accumsan metus quis, volutpat odio.
                Maecenas ac turpis mollis, ornare tellus quis, posuere neque.
                In condimentum ornare volutpat.
            </p>
           
        </Container>
    </Jumbo>
    </Styles>

    )

 ;