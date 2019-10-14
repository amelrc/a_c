import React, { Component } from 'react';
// import Image from '../components/image';
import Cero from '../img/0.png';
import One from '../img/1.png';
import Two from '../img/2.png';
import Three from '../img/3.png';
import Four from '../img/4.png';

const images = [Cero, One, Two, Three, Four];
let index = 0;
images.map((image, index) => <img className='img' src={image} key={index} alt="others"/>);

const goNextImage = () => {
    if(index < images.length) {
        index++;
    }
    else {
        index = 0;
    }
    setTimeout(goNextImage, 1000);
};
goNextImage()



class Hover extends Component {
    state = {
        image: Cero
    };
    
    handleMouseOver = () => {
        this.setState({
            image: Four
        });

    }
    handleMouseOut = () => {
        this.setState({
            image: Cero
        });
    }
    

    render() { 
        return ( 
            <div>
                <img 
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    className='img' 
                    src={this.state.image}
                    alt='images'
                />
                {/* <div>{map}</div> */}
            </div>
         );
    }
}
 
export default Hover;