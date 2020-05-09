import React, { useState } from 'react';
import kana from '../../data/kana';

const vowels = ['a', 'i', 'u', 'e', 'o'];
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const getRandomKana = () => {
    const randomKanaColumn = randomNumber(1, 7);
    return vowels.map((vowel) => {
        return kana[`${vowel}${randomKanaColumn}`].hiragana;
    });
};

const GenerateFlyingKana = ({ kanaCharacters }) => {
    let counter = 0;
    return kanaCharacters.map((kana) => {
        ++counter;
        return (
            <div key={kana} className={`flying-kana-${counter}`}>
                {kana}
            </div>
        );
    });
};

const FlyingKana = () => {
    const [currentKana, setKana] = useState(getRandomKana());

    return (
        <div className='Flying-Kana-Container'>
            <GenerateFlyingKana kanaCharacters={currentKana} />
        </div>
    );
};

export default FlyingKana;
