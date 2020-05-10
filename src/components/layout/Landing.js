import React from 'react';

import LandingMenu from '../landing/LandingMenu';
import FlyingKana from '../landing/FlyingKana';
import Smiley from '../landing/Smiley';

const Landing = () => {
    return (
        <div className='Landing-Container'>
            <FlyingKana />
            <LandingMenu />
            <Smiley />
        </div>
    );
};

export default Landing;
