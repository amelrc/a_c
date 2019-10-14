import React from 'react';
import Cero from '../img/0.png';
import One from '../img/1.png';
import Two from '../img/2.png';
import Three from '../img/3.png';
import Four from '../img/4.png';

const images = [Cero, One, Two, Three, Four];
let index = 0;

const goNextImage = () => {
    if(index - 1 < images.length) {
        index++;
        console.log('hello');
    }
    else {
        index = 0;
    }
    setTimeout(goNextImage, 1000);
}

const next = () => {
    console.log('holaaaaa');
    goNextImage();
    
}

const Slider = () => {
    return ( 
        <div className='container'>
          <img className='img' src={Cero} alt="cero"/>
        </div>
    );
}
 
export default Slider;