import React from 'react';
import {Carousel} from 'react-bootstrap';


import Back1 from '../../../../assets/images/back/back1.jpg';
import Back2 from '../../../../assets/images/back/back2.jpeg';
import Back3 from '../../../../assets/images/back/back3.jpeg';



const event15 = (props) => {
    return (

        <div style={{width:'75%',margin:'auto'}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-auto"
                        src={Back1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-auto"
                        src={Back2}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-auto"
                        src={Back3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    );
}

export default event15;
